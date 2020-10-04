import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    version: '0.0.0'
};

export default function setting(state = INITIAL_STATE, action) {
    return produce(state, (draft) => {
        switch (action.type) {
            case '@setting/SETTING_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@setting/SETTING_SUCCESS': {
                const { version } = action.payload;
                draft.version = version;
                draft.loading = false;
                break;
            }
            case '@setting/SETTING_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
