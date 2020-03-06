import React from 'react';

export const Nav: React.FC = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">
            Home
          </a>
          <a className="navbar-item">
            Salas
          </a>
        </div>
      </div>
    </nav>
  )
};
