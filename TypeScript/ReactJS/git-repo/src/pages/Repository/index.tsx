import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import {Header, Info, Issues} from './styles'

interface RepositoryParams{
    repository: string;
}

const Repository:React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();
    return (
        <>
        <Header>
            <img src={logoImg} alt="GitHub explorer"/>
            <Link to="/dashboard">
               <div>
                    <FiChevronLeft size={16}/>
                    <strong>Voltar</strong>
               </div>
            </Link>
        </Header>
        <Info>
            <header>
                <img src={logoImg}></img>
                <div>
                    <strong>Repo/repo</strong>
                    <p>descricao</p>
                </div>
            </header>
            <ul>
                <li>
                    <strong>1808</strong>
                    <span>Stars</span>
                </li>
                <li>
                    <strong>47</strong>
                    <span>Forks</span>
                </li>
                <li>
                    <strong>67</strong>
                    <span>Issues Abertas</span>
                </li>
            </ul>
        </Info>
        <Issues>
        
            <Link to="">
                <img src="" alt=""/>
                <div >
                    <strong>{}</strong>
                    <p>{}</p>
                </div>
            
                <FiChevronRight size={20}/>
            </Link>
        
        </Issues>
        </>
    
    
    );
}

export default Repository