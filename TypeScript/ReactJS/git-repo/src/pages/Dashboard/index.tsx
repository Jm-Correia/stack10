import React, { useState, FormEvent, useEffect } from 'react';
import {FiChevronRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import api from '../../services/apis';
import {Title, Form, Repositories, Error} from './styles'

interface Repository{
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    description:string;
}

const Dashboard:React.FC = () => {
    const [newRepo, setNewRepo]= useState('');
    const [inputError, setInputError] = useState('');
    const [repository, setRepository] = useState<Repository[]>(()=>{
        const storageRepo = localStorage.getItem('@gitHubExplorer:repositories');
        if(storageRepo){
            return JSON.parse(storageRepo);
        }
        return [];
    }); 


    useEffect(()=>{
        localStorage.setItem('@gitHubExplorer:repositories', JSON.stringify(repository))
    }, [repository])

    async function handleAddRepository(event: FormEvent<HTMLFormElement> ):Promise<void>{
        event.preventDefault();
        try{
            if(!newRepo){
                setInputError('Digite o autor / nome do repositório');
                return;
            }
            const response = await api.get<Repository>(`repos/${newRepo}`);
            
            setRepository([...repository, response.data]);
            setNewRepo('')
            setInputError('')
        }catch(err){
            setInputError('Erro na busca por esse repositório')
        }
    }

 return (
    <>
        <img src={logoImg} alt='Github Explorer'/>
        <Title>Explore repositórios no Github</Title>

        <Form onSubmit={handleAddRepository} hasError={Boolean(inputError)}>
            <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} 
            placeholder="Digite um repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>
        {inputError && <Error>{inputError}</Error>}
        <Repositories>
            {repository.map(repo => (
            <Link id={repo.full_name} key={repo.full_name} to={`/repository/${repo.full_name}`}>
                <img src={repo.owner.avatar_url}
                alt={repo.owner.login}/>
                <div >
                    <strong>{repo.full_name}</strong>
                    <p>{repo.description}</p>
                </div>
            
                <FiChevronRight size={20}/>
            </Link>
         ))}
        </Repositories>
      
        
    </>
 );
}

export default Dashboard