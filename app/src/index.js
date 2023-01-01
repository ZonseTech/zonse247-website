import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";

import routes from './routes';
import { ProvideAuth } from './store/AuthContext';

import 'bootstrap/dist/css/bootstrap.min.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <ProvideAuth>
        <RouterProvider router={createBrowserRouter(routes, {})} />
      </ProvideAuth>
    </React.StrictMode>
  );
