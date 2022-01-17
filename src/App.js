import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Preferences from './Preferences/Preferences';
import useToken from './Components/App/useToken';



function App() {
/*   const [token, setToken] = useState(); */

  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  } 

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;