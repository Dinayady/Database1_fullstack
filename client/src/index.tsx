import React from 'react';
import { Provider } from 'react-redux';
import { ConfigProvider, theme } from 'antd';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { Paths } from './paths';
import { store } from './app/store';
import { Home } from './pages/home/Home';
import { Auth } from './features/auth/auth';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

import './index.css';

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Home />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
]);

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
