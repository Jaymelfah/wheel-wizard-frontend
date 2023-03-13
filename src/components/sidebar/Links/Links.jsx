/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { navLinks } from '../SidebarData';
import './links.css';
import { logout } from '../../../redux/auth/auth';

function Links() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <IconContext.Provider value={{ color: '#98C10F', size: '1.1em' }}>
      <ul className="sidebar-items d-flex flex-column align-items-start p-0">
        {navLinks.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className="sidebar-link-box"
            onClick={item.title === 'Logout' ? handleLogout : null}
          >
            <li className="link-name">
              {item.icon}
              <span className="px-2">{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </IconContext.Provider>
  );
}

export default Links;
