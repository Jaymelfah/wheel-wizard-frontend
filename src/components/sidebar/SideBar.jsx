/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import * as RxIcons from 'react-icons/rx';
import Links from './Links/Links';
import SocialLinks from './SocialLinks/SocialLinks';
import './sidebar.css';

const SideBar = () => {
  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="position-relative">
      <div
        className={`sidebar-container d-flex flex-column justify-content-between bg-white p-3 ${
          sidebar ? 'sidebar-active' : ''
        }`}
      >
        <h1 className="sidebar-title pt-3 ml-5">WheelWizard</h1>
        <Links />
        <SocialLinks />
      </div>
      <button
        type="button"
        className="toggle-sidebar-btn"
        onClick={toggleSidebar}
      >
        <RxIcons.RxHamburgerMenu size="2.5em" />
      </button>
    </div>
  );
};
export default SideBar;
