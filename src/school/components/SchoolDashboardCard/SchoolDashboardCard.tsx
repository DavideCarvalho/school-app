import React from 'react';

interface SchoolDashboardCardProps {
  title: string;
}

export const SchoolDashboardCard: React.FC<SchoolDashboardCardProps> = ({ title, children }) => {
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title is-centered">{title}</p>
      </header>
      <div className="card-content">{children}</div>
    </div>
  );
};
