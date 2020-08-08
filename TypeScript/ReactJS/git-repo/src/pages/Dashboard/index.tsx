import React, { useState, FormEvent } from 'react';
import {FiChevronRight} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

import api from '../../services/apis';
import {Title, Form, Repositories} from './styles'

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
    const [repository, setRepository] = useState<Repository[]>([]); 


    async function handleAddRepository(event: FormEvent<HTMLFormElement> ):Promise<void>{
        
        event.preventDefault();
        const response = await api.get<Repository>(`repos/${newRepo}`);
        
        setRepository([...repository, response.data]);
        setNewRepo('')
    }

 return (
    <>
        <img src={logoImg} alt='Github Explorer'/>
        <Title>Explore repositórios no Github</Title>

        <Form onSubmit={handleAddRepository}>
            <input value={newRepo} onChange={(e) => setNewRepo(e.target.value)} 
            placeholder="Digite um repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
            {repository.map(repo => (
            <a id={repo.full_name} key={repo.full_name} href="teste">
                <img src={repo.owner.avatar_url}
                alt={repo.owner.login}/>
                <div >
                    <strong>{repo.full_name}</strong>
                    <p>{repo.description}</p>
                </div>
            
                <FiChevronRight size={20}/>
            </a>
         ))}
        </Repositories>
      
        
    </>
 );
}

export default Dashboard