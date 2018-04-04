/*
 *
 * NAV MENU COMPONENT
 *
 */

import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import MenuIcon from './MenuIcon';

const NavMenu = ({ iconStyle }) => (
  <IconMenu
    iconButtonElement={<MenuIcon color={iconStyle.color} hoverColor={iconStyle.hoverColor} />}
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
