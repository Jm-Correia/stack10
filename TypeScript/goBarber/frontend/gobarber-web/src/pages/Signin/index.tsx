import React from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import logoImg  from '../../assets/logo.svg';

import {Container, Content, Background} from './styles'

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBaber" />
            <form>
                <h1>Faça seu Logon</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail"/>
                <Input name="password" icon={FiLock} placeholder="Senha" type="password"/>
                <Button type="submit">Entrar</Button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="New">
                <FiLogIn/>
                Criar Conta
                </a>
        </Content>
        <Background></Background>
    </Container>
);
export default SignIn;