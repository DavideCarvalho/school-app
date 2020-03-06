import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SchoolDashboardPage } from './SchoolDashboard.page';
import { elastic as Menu } from 'react-burger-menu';
import './SchoolPage.scss';

export const SchoolPage: React.FC = () => {
  return (
    <div id="outer-container">
      <Menu id="slide" pageWrapId="page-wrap" outerContainerId="outer-container">
        <h1>Hello</h1>
      </Menu>
      <main id="page-wrap">
        <Router>
          <Switch>
            <Route path="/school/dashboard">
              <SchoolDashboardPage />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};
