/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const navLinks = [
  {
    id: 1,
    title: 'CARS',
    icon: <IoIcons.IoIosCar />,
    path: '/',
    cName: 'sidebar-link',
  },
  {
    id: 2,
    title: 'RESERVE',
    icon: <MdIcons.MdOutlineAddCard />,
    path: '/reserve',
    cName: 'sidebar-link',
  },
  {
    id: 3,
    title: 'MY RESERVATIONS',
    icon: <MdIcons.MdOutlineViewTimeline />,
    path: '/myreservations',
    cName: 'sidebar-link',
  },
  {
    id: 4,
    title: 'ADD CAR',
    icon: <GiIcons.GiCartwheel />,
    path: '/add-car',
    cName: 'sidebar-link',
  },
  {
    id: 5,
    title: 'DELETE CAR',
    icon: <AiIcons.AiOutlineDelete />,
    path: '/delete-car',
    cName: 'sidebar-link',
  },
  {
    id: 6,
    title: 'LOGOUT',
    icon: <RiIcons.RiDeleteBack2Line />,
    path: '/',
    cName: 'sidebar-link logout-btn',
    action: 'logout',
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <FaIcons.FaTwitter />,
    cName: 'social-icon',
  },
  {
    id: 2,
    icon: <FaIcons.FaFacebookF />,
    cName: 'social-icon',
  },
  {
    id: 3,
    icon: <FaIcons.FaGooglePlusG />,
    cName: 'social-icon',
  },
  {
    id: 4,
    icon: <FaIcons.FaPinterestP />,
    cName: 'social-icon',
  },
];
