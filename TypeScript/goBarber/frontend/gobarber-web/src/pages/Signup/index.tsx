import React from 'react';
import {FiArrowLeft, FiMail,FiUser, FiLock} from 'react-icons/fi'
import logoImg  from '../../assets/logo.svg';

import {Container, Content, Background} from './styles'

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
    <Container>
         <Background></Background>
        <Content>
            <img src={logoImg} alt="GoBaber" />
            <form>
                <h1>Faça seu Cadastro</h1>

                <Input name="nome" icon={FiMail} placeholder="Nome"/>
                <Input name="email" icon={FiLock} placeholder="Email" />
                <Input name="password" icon={FiLock} placeholder="Senha" type="password"/>
                
                <Button type="submit">Cadastrar</Button>
            </form>
            <a href="New">
                <FiArrowLeft/>
                Voltar para Login
                </a>
        </Content>
       
    </Container>
);
export default SignUp;