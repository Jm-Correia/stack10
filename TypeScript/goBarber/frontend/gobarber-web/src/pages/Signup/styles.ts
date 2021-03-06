import styled,{keyframes} from 'styled-components';
import {shade} from 'polished';
import signUpImg from '../../assets/signup.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;


const animationFromRight = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;

    animation: ${animationFromRight} 1.5s;
    
    form{
        margin: 80px 0;
        width: 340px;
        text-align: center;
    

         h1{
            margin-bottom: 24px;
        }

        a{
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: background-color 0.2s;

            &:hover{
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    }

    > a{
            color: #ff9000;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: background-color 0.2s;

            display: flex;
            align-items: center;

            svg{
                margin-right: 16px;
            }

            &:hover{
                color: ${shade(0.2, '#ff9000')};
            }
    }
`;
export const Background = styled.div`
    flex: 1;
    background:url(${signUpImg}) no-repeat center;
    background-size: cover;
`;