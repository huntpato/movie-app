import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const { header, header_linkActive, header_link } = styles;

  return (
    <header className={header}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? header_linkActive : header_link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              className={({ isActive }) =>
                isActive ? header_linkActive : header_link
              }
            >
              Listado
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? header_linkActive : header_link
              }
            >
              Contacto
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
