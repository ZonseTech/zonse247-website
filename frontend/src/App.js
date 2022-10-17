import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/css/App.css"
import "./assets/css/Materialize.css"
import "./assets/css/Custom.css"

import Login from "./pages/Auth/Login";
import useToken from './utils/useToken';

function App() {

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
