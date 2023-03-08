import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../SidebarData';
import './social-links.css';

function SocialLinks() {
  return (
    <ul className="social-links d-flex flex-row justify-content-between p-0 px-5">
      {socialLinks.map((item) => (
        <li key={item.id} className={item.cName}>
          <Link to="/" className="social-link">{item.icon}</Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
