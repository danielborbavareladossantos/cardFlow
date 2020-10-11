import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import * as UserActions from './actions';

function* updateProfile({ payload }) {
    try {

        const { name, email, avatar_id, ...rest } = payload.data;

        const data = {
            name,
            email,
            avatar_id,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, '/users', data);

        toast.success('Perfil atualizado com sucesso!');

        yield put(UserActions.updateProfileSuccess(response.data));
    } catch (error) {
        toast.error('Falha ao atualizar o perfil, verifique seus dados');
        yield put(UserActions.updateProfileFailure());
    }
}

function* updateSetting({ payload }) {
    try {
        const { setting } = payload;
        toast.success('Configuração atualizada atualizado com sucesso!');
        yield put(UserActions.updateSettingSuccess(setting));
    } catch (error) {
        toast.error('Falha ao atualizar o perfil, verifique seus dados');
        yield put(UserActions.updateSettingFailure());
    }
}

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile),
    takeLatest('@user/UPDATE_SETTING_REQUEST', updateSetting)
]);
