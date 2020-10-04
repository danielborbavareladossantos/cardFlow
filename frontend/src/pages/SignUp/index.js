import React from 'react';
import history from '~/services/history';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import img_logo from '~/assets/logo-color.png';

import { signInRequest } from '~/store/modules/auth/actions';
import { store } from '~/store';

const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório!'),
    email: Yup.string()
        .email('Insira um e-mail válido!')
        .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignUp() {
    const dispatch = useDispatch();
    const { version } = store.getState().setting;
    const loading = useSelector((state) => state.auth.loading);

    function handleSubmit({ name, email, password }) {
        dispatch(signInRequest( name, email, password));
    }

    return (
        <>
            <img src={img_logo} alt="Logo" width={100} height={100}/>
            <Typography id="title" variant="subtitle1" display="block" gutterBottom>
                {'Flow'}
            </Typography>

            {!loading &&
                <Form schema={schema} onSubmit={handleSubmit}>
                    <Input name="name" type="name" placeholder="Name" />
                    <Input name="email" type="email" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Password" />
                    <button type="submit">
                    {process.env.REACT_APP_NAME}
                    </button>
                </Form>
            }

            {loading &&
                <>
                    <br/><br/>
                    <CircularProgress color="primary"/>
                    <br/>
                </>
            }

            <br/><br/>

            <Link
                onClick={()=>{
                    history.push('/')
                }}
            >
                Sign In
            </Link>

            <br/><br/>
            <Typography id="versao" variant="caption" display="block" gutterBottom>
                {'Frontend version: '+process.env.REACT_APP_VERSION}
            </Typography>
            <Typography id="versao" variant="caption" display="block" gutterBottom>
                {'Backend version: '+version}
            </Typography>
        </>
    );
}
