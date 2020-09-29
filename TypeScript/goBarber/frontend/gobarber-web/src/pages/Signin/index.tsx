import React,{useCallback, useRef} from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';


import {useAuth} from '../../hooks/AuthContext';
import getValidationErros from '../../util/getValidationErros';

import logoImg  from '../../assets/logo.svg';

import {Container, Content, Background} from './styles'

import Input from '../../components/Input';
import Button from '../../components/Button';

interface SignInFormData{
    email:string;
    password: string;
}

const SignIn: React.FC = () => {
    const {signIn} = useAuth();
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data:SignInFormData) => {
        try{
            formRef.current?.setErrors({})
            const schema = Yup.object()
            .shape({
                email: Yup.string()
                .required('E-mail obrigatório.')
                .email('Digite um e-mail válido.'),
                password: Yup.string()
                .required('Senha obrigatório.')
            });

            await schema.validate(data, {
                abortEarly: false
            });
            signIn({
                email: data.email,
                password: data.password
            });
        }catch(err){
            console.log(err);
            const erros = getValidationErros(err);
            
            formRef.current?.setErrors(erros)
        }
     },[signIn]);

    return (
    <Container>
        <Content>
            <img src={logoImg} alt="GoBaber" />
            <Form  ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu Logon</h1>
                <Input name="email" icon={FiMail} placeholder="E-mail"/>
                <Input name="password" icon={FiLock} placeholder="Senha" type="password"/>
                <Button type="submit">Entrar</Button>
                <a href="forgot">Esqueci minha senha</a>
            </Form>
            <a href="New">
                <FiLogIn/>
                Criar Conta
                </a>
        </Content>
        <Background></Background>
    </Container>
)
};
export default SignIn;