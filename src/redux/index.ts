import {Action, configureStore} from '@reduxjs/toolkit';

import {rootReducer} from './rootReducer';
import {thunk} from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>, Action>(
  rootPersistConfig,
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;

export const persistor = persistStore(store);
