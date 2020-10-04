import { useDispatch } from 'react-redux';
import { store } from '~/store';
import { settingRequest } from '~/store/modules/setting/actions';
import { initialStateMenu, initialStateIdioma, initialStateCor } from '~/store/modules/user/actions';

export default () => {
    const usuario = store.getState().user;
    const dispatch = useDispatch();

    //seta versao
    dispatch(settingRequest());

    //garante atributo idioma setado
    if (usuario != null && usuario.setting != null && usuario.setting.menu == null) {
        dispatch(initialStateMenu());
    }
    //garante atributo idioma setado
    if (usuario != null && usuario.setting != null && usuario.setting.idioma == null) {
        dispatch(initialStateIdioma());
    }
    //garante atributo idioma setado
    if (usuario != null && usuario.setting != null && usuario.setting.cor == null) {
        dispatch(initialStateCor());
    }
};
