/*
 *
 * MENU COMPONENT
 *
 */

import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const NavMenu = ({ iconStyle }) => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon color={iconStyle.color} hoverColor={iconStyle.hoverColor} /></IconButton>}
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
