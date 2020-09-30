import React, {useCallback, useRef} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft, FiMail,FiUser, FiLock} from 'react-icons/fi'
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';

import {useToast} from '../../hooks/ToastContext';
import getValidationErros from '../../util/getValidationErros';

import logoImg  from '../../assets/logo.svg';

import {Container, Content, Background} from './styles'

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

interface FormData{
    name:string,
    email:string,
    password:string
}

const SignUp: React.FC = () => {
   const formRef = useRef<FormHandles>(null);
   const {addToast} = useToast();
   const history = useHistory();

    const handleSubmit = useCallback(async (data:FormData) => {
        try{
            formRef.current?.setErrors({})
            const schema = Yup.object()
            .shape({
                name: Yup.string()
                .required('Nome Obrigatório.'),
                email: Yup.string()
                .required('E-mail obrigatório.')
                .email('Digite um e-mail válido.'),
                password: Yup.string()
                .min(6, 'No mínimo 6 digitos')
            });

            await schema.validate(data, {
                abortEarly: false
            });


       
           const response = await api.post('users', {
                name: data.name,
                email: data.email,
                password: data.password
            });
            
            if(response.status === 200){
                addToast({
                    type: 'sucess',
                    title: 'Cadastro Realizado'
                })
            }
            history.push('/')

        }catch(err){
            if(err instanceof Yup.ValidationError){
                const erros = getValidationErros(err);
                formRef.current?.setErrors(erros)
                return;
            }
            addToast({
                 type: 'error',
                    title: 'Erro no Cadastro',
                    description: err.response.data.message
                });
        }
     },[addToast, history]);
   
    return (
        <Container>
        <Background></Background>
       <Content>
           <img src={logoImg} alt="GoBaber" />
           <Form ref={formRef} onSubmit={handleSubmit}>
               <h1>Faça seu Cadastro</h1>

               <Input name="name" id="nome" icon={FiUser} placeholder="Nome"/>
               <Input name="email" id="email" icon={FiMail} placeholder="Email" />
               <Input name="password" id="senha" icon={FiLock} placeholder="Senha" type="password"/>
               
               <Button type="submit">Cadastrar</Button>
           </Form>
           <Link to="/">
               <FiArrowLeft/>
               Voltar para Login
               </Link>
       </Content>
      
   </Container>
    )
};
export default SignUp;