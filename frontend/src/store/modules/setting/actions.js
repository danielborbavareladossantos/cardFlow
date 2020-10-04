export function settingRequest() {
    return {
        type: '@setting/SETTING_REQUEST',
    };
};

export function settingSuccess(version) {
    return {
        type: '@setting/SETTING_SUCCESS',
        payload: {
            version,
        },
    };
};

export function settingFailure() {
    return {
        type: '@setting/SETTING_FAILURE',
    };
};
