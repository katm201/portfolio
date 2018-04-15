/*
 *
 * ICON BUTTON FOR NAV MENU
 *
 */

import React from 'react';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const MenuIconButton = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    tooltip="Menu"
    tooltipPosition="bottom-right"
  >
    <MenuIcon />
  </IconButton>
);

export default MenuIconButton;
