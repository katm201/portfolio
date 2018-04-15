/*
 *
 * NAV MENU COMPONENT
 *
 */

import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import MenuIconButton from './MenuIconButton';
import { handleClick, handleRequestClose } from './helpers';

class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleClick = handleClick.bind(this);
    this.handleRequestClose = handleRequestClose.bind(this);
  }

  render() {
    const { open, anchorEl } = this.state;
    return (
      <div>
        <MenuIconButton onClick={this.handleClick} />
        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem primaryText="Home" />
            <MenuItem primaryText="Skills" />
            <MenuItem primaryText="Projects" />
            <MenuItem primaryText="Blog" />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default NavMenu;
