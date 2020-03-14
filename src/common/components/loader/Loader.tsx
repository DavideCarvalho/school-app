import './index.scss';
import React from 'react';

interface LoaderProps {
  active: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ active }) => {
  return <>{active && <div className="loader" />}</>;
};
