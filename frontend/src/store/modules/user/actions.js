//atualiza localstorage configurações

export function updateSettingRequest(setting) {
    return {
        type: '@user/UPDATE_SETTING_REQUEST',
        payload: {
            setting,
        },
    };
}

export function updateSettingSuccess(setting) {
    return {
        type: '@user/UPDATE_SETTING_SUCCESS',
        payload: {
            setting,
        },
    };
}

export function updateSettingFailure() {
    return {
        type: '@user/UPDATE_SETTING_FAILURE',
    };
}

//request backend profile

export function updateProfileRequest(data) {
    return {
        type: '@user/UPDATE_PROFILE_REQUEST',
        payload: {
            data,
        },
    };
}

export function updateProfileSuccess(profile) {
    return {
        type: '@user/UPDATE_PROFILE_SUCCESS',
        payload: {
            profile,
        },
    };
}

export function updateProfileFailure() {
    return {
        type: '@user/UPDATE_PROFILE_FAILURE',
    };
}

//initial values inside attributes

export function initialStateMenu() {
    return {
        type: '@user/INITIAL_STATE_MENU',
    };
};

export function initialStateIdioma() {
    return {
        type: '@user/INITIAL_STATE_IDIOMA',
    };
};

export function initialStateCor() {
    return {
        type: '@user/INITIAL_STATE_COR',
    };
};
