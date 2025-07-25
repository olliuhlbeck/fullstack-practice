import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { router } from '../src/routes/Routes.tsx';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './components/AuthComponents/AuthProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
