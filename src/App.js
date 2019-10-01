import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import Emplist from './Emplist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <h1 className="text-primary">Welcome to Unicorn Solutions </h1>
          <div className="col-sm-3">

            <Link to={'/Signin'}>Sign in</Link>
            <br></br>
            <Link to={'/Signup'}>Sign up</Link>

          </div>
          <hr></hr>
          <Switch>
            <Route path='/Signin' component={Signin}></Route>
            <Route path='/Signup' component={Signup}></Route>
            <Route path='/Emplist' component={Emplist}></Route>

          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
