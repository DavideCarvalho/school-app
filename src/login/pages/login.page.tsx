import React from 'react';
import {LoginForm} from "../containers";
import './index.css';

export const LoginPage: React.FC = () => {
  return (
    <div className="hero is-light-blue is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-4 is-offset-4">
              <p className="has-text-centered title">SchoolMunity</p>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
