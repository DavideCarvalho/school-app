import React from 'react';
import { SchoolDashboardManagementCard } from '../../containers/SchoolDashboardManagementCard';

export const SchoolDashboardPage: React.FC = () => {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <p className="has-text-centered title">Dashboard</p>
          <div className="container">
            <div className="columns is-multiline is-centered">
              <SchoolDashboardManagementCard/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
