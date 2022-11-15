import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import ContactReducer from './reducers/ContactReducer';
import LoginReducer from './reducers/LoginReducer';
import { taskApi } from './services/tasksApi';
const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist: ['userdata','mobiledata','is_privacy_accepted','is_logged_in']
}

const persistedReducer = persistReducer(persistConfig, LoginReducer)
export const store = configureStore({
  reducer: {
    persistedReducer: persistedReducer,
    ContactReducer:ContactReducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(taskApi.middleware)
      
});

export const persistor = persistStore(store)