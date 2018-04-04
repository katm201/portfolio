/*
 *
 * HEADER COMPONENT
 *
 */

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

import NavMenu from '../NavMenu';
import localStyle from './styles';

const Header = () => (
  <Toolbar style={localStyle.toolbar}>
    <ToolbarGroup firstChild>
      <NavMenu iconStyle={localStyle.icon} />
      <ToolbarTitle text="Katherine Manning" style={localStyle.title} />
    </ToolbarGroup>
  </Toolbar>
);

export default Header;
