/*
 *
 * MENU COMPONENT
 *
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const TopMenu = (props) => (
  <Menu style={{ width: '90px' }} {...props}>
    <MenuItem primaryText="Home" />
    <MenuItem primaryText="Skills" />
    <MenuItem primaryText="Projects" />
    <MenuItem primaryText="Blog" />
  </Menu>
);

export default TopMenu;
