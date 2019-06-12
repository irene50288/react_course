import React from 'react';
import {NavLink} from 'react-router-dom';
import {mainPath, cartPagePath, contactPagePath} from 'helpers/routes';

const MainMenu = () => {
  return (
    <ul>
      <li><NavLink to={mainPath()}>Home</NavLink></li>
      <li><NavLink to={cartPagePath()}>Cart</NavLink></li>
      <li><NavLink to={contactPagePath()}>Contact</NavLink></li>
    </ul>
  );
};
export default MainMenu;
