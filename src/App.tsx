import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
import {LoginPage} from "./login/pages";
import {SchoolPage} from "./school/pages";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['', '/login']}>
          <LoginPage/>
        </Route>
        <Route path="/school/*">
          <SchoolPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
