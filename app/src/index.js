import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";


import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';


// import "./assets/css/App.css"
// import "./assets/css/Materialize.css"
// import "./assets/css/Vendors.css"

import { ProvideAuth } from './store/AuthContext';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>

      <ProvideAuth>

        <RouterProvider router={createBrowserRouter(routes, {})} />

      </ProvideAuth>
    </React.StrictMode>
  );
