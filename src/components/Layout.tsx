import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À Propos</Link>
            </li>
            <li>
              <Link to="/concerts">Concerts</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Écho de Charbonnières</p>
      </footer>
    </div>
  );
};

export default Layout;
