/*
 *
 * ICON BUTTON FOR NAV MENU
 *
 */

import React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const MenuIcon = ({ color, hoverColor }) => (
  <IconButton>
    <MoreVertIcon color={color} hoverColor={hoverColor} />
  </IconButton>
);

export default MenuIcon;