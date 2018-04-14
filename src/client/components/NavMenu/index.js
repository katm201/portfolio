/*
 *
 * NAV MENU COMPONENT
 *
 */

import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import { lightBlue } from '../../assets/muiTheme';
import MenuIcon from './MenuIcon';

const NavMenu = () => (
  <IconMenu
    iconButtonElement={<MenuIcon hoverColor={lightBlue} />}
    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
    open
  >
    <MenuItem primaryText="Home" />
    <MenuItem primaryText="Skills" />
    <MenuItem primaryText="Projects" />
    <MenuItem primaryText="Blog" />
  </IconMenu>
);

export default NavMenu;
