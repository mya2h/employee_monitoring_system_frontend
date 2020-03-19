import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/signin'
import SignUp from './components/auth/signup'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path = "/signUp" component = {SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
