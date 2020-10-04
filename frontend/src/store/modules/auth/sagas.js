import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import * as AuthActions from './actions';

function* signIn({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, '/sessions', { email, password });

        const { token, user } = response.data;

        if (!user.provider) {
            toast.error('Usuario não é prestador');
            yield put(AuthActions.signFailure());
            return;
        }

        yield put(AuthActions.signInSuccess(token, user));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        history.push('/dashboard');
    } catch (error) {
        toast.error('Falha ao fazer login, verifique suas credenciais!');
        yield put(AuthActions.signFailure());
    }
}

function* signUp({ payload }) {
    try {
        const { name, email, password } = payload;

        yield call(api.post, '/users', { name, email, password });

        yield put(AuthActions.signUpSuccess());

        toast.success('Sucesso ao se cadastrar!');
        history.push('/');
    } catch (error) {
        toast.error('Falha no cadastro, verifique suas informações!');
        yield put(AuthActions.signFailure());
    }
}

const setToken = ({ payload }) => {
    const { token } = payload.auth;
    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

const signOut = () => {
    history.push('/');
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
