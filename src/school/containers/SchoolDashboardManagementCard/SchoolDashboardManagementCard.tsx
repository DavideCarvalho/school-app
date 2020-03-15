import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolDashboardCard } from '../../components/SchoolDashboardCard';
import { State, useStoreState } from 'easy-peasy';
import { StoreModel } from '../../../store';
import './index.scss';

export const SchoolDashboardManagementCard: React.FC = () => {
  const type = useStoreState<State<StoreModel>, string>(({ loggedUser }) => loggedUser.type);
  return type !== 'school-admin'
    ? null
    : (
      <div className="column is-4">
        <SchoolDashboardCard title="Administração">
          <div className="has-text-centered">
            <Link to={`/escola/admin/professores`} className="button school-management-card-button-margin is-centered is-block is-info is-outlined">
              Professores
            </Link>
            <Link to={`/escola/admin/aulas`} className="button school-management-card-button-margin is-centered is-block is-info is-outlined">
              Aulas
            </Link>
          </div>
        </SchoolDashboardCard>
      </div>
    );
};
