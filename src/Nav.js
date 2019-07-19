import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Home', icon: <i className="fas fa-home"></i> },
  { to: '/forum', label: 'Forum', icon: <i  className="fas fa-comment-dots"></i> },
  { to: '/account', label: 'Account', icon: <i className="fas fa-user"></i> }
];

const Nav = () => {
  const links = routes.map(({ to, label, icon }) => {
    return <NavLink strict exact to={to} key={to}>{icon}{label}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav