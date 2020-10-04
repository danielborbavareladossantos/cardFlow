import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer(
        {
            key: 'frontend',
            storage,
            whitelist: ['auth', 'user', 'setting'],
        },
        reducers
    );

    return persistedReducer;
};
