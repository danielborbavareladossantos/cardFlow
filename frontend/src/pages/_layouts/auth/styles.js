import styled from 'styled-components';
import { darken } from 'polished';
import img_bg from '~/assets/background.png';

export const Wrapper = styled.div`
    height: 100%;
    background-color: #f2f2f2;
    background: url(${img_bg});
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 315px;
    text-align: center;

    #title {
        color: #be0303;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;

        input {
            background: rgba(0, 0, 0, 0.1);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #be0303;
            margin: 0 0 10px;

            &::placeholder {
                color: #be0303;
            }
        }

        span {
            font-weight: bold;
            color: red;
            align-self: flex-start;
            margin: 0 0 10px;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #be0303;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#be0303')};
            }
        }
    }

    a {
        color: #be0303;
        margin-top: 15px;
        font-size: 16px;
        opacity: 0.8;
        cursor: pointer;

        &:hover: {
            opacity: 1;
        }
    }

    #versao {
        color: #666666;
    }

`;
