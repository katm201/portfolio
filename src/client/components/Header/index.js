/*
 *
 * HEADER COMPONENT
 *
 */

import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

import NavMenu from '../NavMenu';

const Header = () => (
  <Toolbar>
    <ToolbarGroup firstChild>
      <NavMenu />
      <ToolbarTitle text="Katherine Manning" />
    </ToolbarGroup>
  </Toolbar>
);

export default Header;
