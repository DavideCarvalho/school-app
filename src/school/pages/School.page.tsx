import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {slide as Menu} from 'react-burger-menu';
import {SchoolDashboardPage} from "./SchoolDashboard.page";

export const SchoolPage: React.FC = () => {
  return (
    <div className="outer-container">
      <Menu noOverlay pageWrapId="page-wrap" isOpen={true}>
        <h1>Teste</h1>
      </Menu>
      <main id="page-wrap">
        <Router>
          <Switch>
            <Route path="/school/dashboard">
              <SchoolDashboardPage/>
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  )
};
