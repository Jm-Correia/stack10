import React, { Component } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from '../../components/Container/index';
import { Form, SubmitButton, List } from './style';

export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        loading: false,
    };

    componentDidMount() {
        const repositories = localStorage.getItem('repositories');
        if (repositories) {
            this.setState({
                repositories: JSON.parse(repositories),
            });
        }
    }

    componentDidUpdate(_, prevState) {
        const { repositories } = this.state;
        if (prevState.repositories !== repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories));
        }
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value });
    };

    handleSubmit = async e => {
        e.preventDefault();

        this.setState({ loading: true });
        const { newRepo, repositories } = this.state;

        const response = await api.get(`/repos/${newRepo}`);

        const data = {
            id: response.data.id,
            name: response.data.full_name,
        };

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
            loading: false,
        });
    };

    render() {
        const { newRepo, loading, repositories } = this.state;
        return (
            <div>
                <Container>
                    <h1>
                        <FaGithub size={25} />
                        Repositórios
                    </h1>
                    <Form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Adicionar Repositório"
                            value={newRepo}
                            onChange={this.handleInputChange}
                        />
                        <SubmitButton loading={loading}>
                            {loading ? (
                                <FaSpinner color="#FFF" size={18} />
                            ) : (
                                <FaPlus color="#FFF" size={18} />
                            )}
                        </SubmitButton>
                    </Form>
                    <List>
                        {repositories.map(repo => (
                            <li key={repo.id}>
                                <span> {repo.name} </span>
                                <Link
                                    to={`/repository/${encodeURIComponent(
                                        repo.name
                                    )}`}
                                >
                                    Detalhes
                                </Link>
                            </li>
                        ))}
                    </List>
                </Container>
            </div>
        );
    }
}
