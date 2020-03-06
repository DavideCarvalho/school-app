import React from 'react';
import { LoginForm } from '../containers';
import './index.scss';

export const LoginPage: React.FC = () => {
  return (
    <div className="hero app-background-color is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-4 login-card-background-color has-rounded-borders">
              <p className="has-text-centered title">SchoolApp</p>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
