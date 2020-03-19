import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/auth/signin'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
