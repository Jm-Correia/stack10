import React from 'react';
import {FiChevronRight} from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'

import {Title, Form, Repositories} from './styles'



const Dashboard:React.FC = () => {
 return (
    <>
        <img src={logoImg} alt='Github Explorer'/>
        <Title>Explore repositórios no Github</Title>

        <Form action="">
            <input placeholder="Digite um repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
            <a href="test">
                <img src="https://avatars1.githubusercontent.com/u/37315336?s=460&u=7f6165ef7b11128802cd0930b783cbead141f909&v=4" 
                alt="João Correia"/>
                <div >
                    <strong>João Correia</strong>
                    <p>sou Dev,curioso que gosta de aprender. Apaixonado por tecnologias disruptivas e principalmente por Liberdade.</p>
                </div>
            
                <FiChevronRight size={20}/>
            </a>
            <a href="test">
                <img src="https://avatars1.githubusercontent.com/u/37315336?s=460&u=7f6165ef7b11128802cd0930b783cbead141f909&v=4" 
                alt="João Correia"/>
                <div >
                    <strong>João Correia</strong>
                    <p>sou Dev,curioso que gosta de aprender. Apaixonado por tecnologias disruptivas e principalmente por Liberdade.</p>
                </div>
            
                <FiChevronRight size={20}/>
            </a>
        </Repositories>
      
        
    </>
 );
}

export default Dashboard