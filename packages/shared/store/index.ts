import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, useStore } from 'react-redux';
import recentPost from './board';
import user from './user';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'persist',
  storage,
  whitelist: ['recentPost', 'user']
};

const rootReducer = combineReducers({
  recentPost,
  user
});

export const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return configureStore({
      reducer: rootReducer
    });
  } else {
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store: any = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            ignoredPaths: ['__persistor']
          }
        })
    });
    store.__persistor = persistStore(store);
    return store;
  }
};

export * from './board';
export * from './user';

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
