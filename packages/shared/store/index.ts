import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, useStore } from 'react-redux';
import recentPostReducer from './board';

export const makeStore = () => {
  return configureStore({
    reducer: {
      recentPostReducer
    }
  });
};

export * from './board';

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
