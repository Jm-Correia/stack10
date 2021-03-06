import styled , {css} from 'styled-components';
import {shade} from 'polished'


interface FormProps{
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;

        ${(props)=> props.hasError && css`
            border: 2px solid #c53030;
        `}
        
        &::placeholder{
            color: #A8A8B3;
        }

    }

    button{
        margin-left: 5px;
        width: 150px;
        height: 70px;
        background: #04D361;
        color: white;
        border-radius: 0 5px 5px 0;
        border: 0;
        font-weight: bold;
        transition: background-color 0.2s;
        &:hover {
            background: ${shade(0.2, '#04D361')}
        }
    }

`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 0.2s;
    
        & + a {
            margin-top: 10px;
        }

        &:hover {
            transform: translate(10px)
        }
    

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div{
            margin-left: 10px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }

            p{
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }

            svg{
                margin-left: auto;
                color: #C9C9D4;
            }

        }
    }

`;

export const Error = styled.span`
    display:block;
    color: #c53030;
    margin-top: 8px;

`;