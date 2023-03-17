import React, { useState } from 'react';
import './navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import Links from '../sidebar/Links/Links';

const MobNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavToggle = () => {
    setOpen(!open);
  };
  return (
    <Navbar bg="light" expand="lg" className="mob-nav" expanded={open}>
      <h1 className="sidebar-title pt-3 ml-5">WheelWizard</h1>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        style={{ backgroundColor: '#98c10f', outline: 'none' }}
        className="hamburger-btn"
        onClick={handleNavToggle}
      />
      <Navbar.Collapse id="basic-navbar-nav" className="pt-5">
        <Nav className="mr-auto" onClick={handleNavToggle}>
          <Links />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MobNavbar;
