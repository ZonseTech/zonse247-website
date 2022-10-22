import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import routes from './routes';

import "./assets/css/App.css"
import "./assets/css/Materialize.css"
import "./assets/css/Vendors.css"

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>

      <RouterProvider router={createBrowserRouter(routes, {})} />

    </React.StrictMode>
  );
