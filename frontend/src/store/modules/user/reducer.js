import produce from 'immer';

const INITIAL_STATE_SETTINGS = {
    menu:1,
    cor: {
        opcao:1,
        lista: null
    },
    idioma: "pt"
};

const INITIAL_STATE = {
    profile: {name: ""},
    loading: false,
    setting: INITIAL_STATE_SETTINGS
};

export default function user(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@auth/SIGN_IN_SUCCESS': {
                const { user: profile } = action.payload;

                draft.profile = profile;
                break;
            }
            case '@auth/SIGN_OUT': {
                draft.profile = null;
                break;
            }
            case '@user/UPDATE_PROFILE_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@user/UPDATE_PROFILE_SUCCESS': {
                const { profile } = action.payload;

                draft.profile = profile;
                draft.loading = false;
                break;
            }
            case '@user/UPDATE_PROFILE_FAILURE': {
                draft.loading = false;
                break;
            }
            case '@user/UPDATE_SETTING_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@user/UPDATE_SETTING_SUCCESS': {
                const { setting } = action.payload;
                draft.setting = setting;
                draft.loading = false;
                break;
            }
            case '@user/UPDATE_SETTING_FAILURE': {
                draft.loading = false;
                break;
            }
            case '@user/INITIAL_STATE_MENU': {
                draft.setting.menu = 1;
                break;
            }
            case '@user/INITIAL_STATE_IDIOMA': {
                draft.setting.idioma = "pt";
                break;
            }
            case '@user/INITIAL_STATE_COR': {
                const cor = {
                    opcao:1,
                    lista: null
                };
                draft.setting.cor = cor;
                break;
            }
            default:
        }
    });
}
