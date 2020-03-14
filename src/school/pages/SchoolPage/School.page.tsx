import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SchoolDashboardPage } from '../SchoolDashboardPage';
import { elastic as Menu } from 'react-burger-menu';
import './SchoolPage.scss';
import { SchoolAdminProfessorPage } from '../SchoolAdminProfessorPage';
import { auth } from '../../../utils/firebase';

async function logout(): Promise<void> {
  await auth.signOut();
}

export const SchoolPage: React.FC = () => {
  return (
    <div id="outer-container">
      <Menu id="slide" pageWrapId="page-wrap" outerContainerId="outer-container">
        <h1 onClick={logout}>Sair</h1>
      </Menu>
      <main id="page-wrap">
        <div className="hero app-background-color is-fullheight">
          <div className="hero-body">
            <Router>
              <Switch>
                <Route path="/escola/home">
                  <SchoolDashboardPage />
                </Route>
                <Route path="/escola/admin/professores">
                  <SchoolAdminProfessorPage />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </main>
    </div>
  );
};
