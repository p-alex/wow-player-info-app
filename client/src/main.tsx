import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AuthProvider from './context/AuthContext';
import RegionProvider from './context/RegionContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <RegionProvider>
          <App />
        </RegionProvider>
      </AuthProvider>
      <ReactQueryDevtools />
    </BrowserRouter>
  </QueryClientProvider>,
);
