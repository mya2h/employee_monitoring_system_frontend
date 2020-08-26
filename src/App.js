import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import SideNav from './components/layout/sideNav'
import Dashboard from './components/layout/landing'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path = "/signUp" component = {SignUp}/>
        <Route exact path = "/side" component ={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
