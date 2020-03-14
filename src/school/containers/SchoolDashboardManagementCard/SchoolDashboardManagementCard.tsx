import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolDashboardCard } from '../SchoolDashboardCard';

export const SchoolDashboardManagementCard: React.FC = () => {
  return (
    <SchoolDashboardCard title="Administração">
      <div className="has-text-centered">
        <Link to={`/escola/admin/professores`} className="button is-centered is-info is-outlined">
          Professores
        </Link>
      </div>
    </SchoolDashboardCard>
  );
};
