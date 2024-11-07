'use client';
import { AppStore, makeStore } from '@lvc/shared/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
const queryClient = new QueryClient();
const LibProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={storeRef.current.__persistor}>
          {children}
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default LibProvider;
