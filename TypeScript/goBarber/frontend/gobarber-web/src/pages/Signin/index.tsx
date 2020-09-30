import React,{useCallback, useRef} from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import {useAuth} from '../../hooks/AuthContext';
import {useToast} from '../../hooks/ToastContext';

import getValidationErros from '../../util/getValidationErros';
import logoImg  from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';


import {Container, Content, Background} from './styles'

interface SignInFormData{
    email:string;
    password: string;
}

const SignIn: React.FC = () => {
    const {signIn} = useAuth();
    const {addToast} = useToast();
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

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
            await signIn({
                email: data.email,
                password: data.password
            });
            history.push('/dashboard')
        }catch(err){
           if(err instanceof Yup.ValidationError){
                const erros = getValidationErros(err);
                formRef.current?.setErrors(erros)
           }else{
            addToast({
                type: 'error',
                    title: 'Erro na Autenticação',
                    description: 'Email ou senha invalidos.'
                });
            }
        }
     },[addToast, history, signIn]);

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
            <Link to="signup">
                <FiLogIn/>
                Criar Conta
                </Link>
        </Content>
        <Background></Background>
    </Container>
)
};
export default SignIn;