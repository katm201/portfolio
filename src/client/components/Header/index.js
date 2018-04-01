/*
 *
 * HEADER COMPONENT
 *
 */

import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';

import Menu from '../Menu';

const Header = () => (
  <div>
    <AppBar
      title={'Katherine Manning'}
      primary={'true'}
      onLeftIconButtonClick={() => console.log('hello')}
    />
      <Menu />
  </div>
);

export default Header;
