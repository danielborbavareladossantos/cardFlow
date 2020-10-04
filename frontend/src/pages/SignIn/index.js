import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import history from '~/services/history';

import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import { Form, Input } from '@rocketseat/unform';

import img_logo from '~/assets/logo-color.png';

import { signInRequest } from '~/store/modules/auth/actions';
import { store } from '~/store';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email!')
        .required('Email is required!'),
    password: Yup.string().required('Password is required!'),
});

export default () => {
    const dispatch = useDispatch();
    const { version } = store.getState().setting;
    const loading = useSelector((state) => state.auth.loading);

    const handleSubmit = ({ email, password }) => {
        dispatch(signInRequest(email, password));
    }

    return (
        <>
            <img src={img_logo} alt="Logo" width={100} height={100}/>
            <Typography id="title" variant="subtitle1" display="block" gutterBottom>
                {process.env.REACT_APP_NAME}
            </Typography>

            {!loading &&
                <Form schema={schema} onSubmit={handleSubmit}>
                    <Input name="email" type="email" placeholder="Email" />
                    <Input name="password" type="password" placeholder="Password" />
                    <button type="submit">
                        {'Sign In'}
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
                    history.push('/signup')
                }}
            >
                Sign Up
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
