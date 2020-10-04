import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import * as SettingActions from './actions';

function* settingRequest() {
    try {
        const response = yield call(api.get, '/version');
        yield put(SettingActions.settingSuccess(response.data.version));
    } catch (error) {
        toast.error('Falha ao verificar versão!');
        yield put(SettingActions.settingFailure());
    }
}

export default all([
    takeLatest('@setting/SETTING_REQUEST', settingRequest)
]);
