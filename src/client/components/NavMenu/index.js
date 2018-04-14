/*
 *
 * NAV MENU COMPONENT
 *
 */

import React from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { lightBlue } from '../../assets/muiTheme';
import MenuIcon from './MenuIcon';
import { handleClick, handleRequestClose } from './helpers';

class NavMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleClick = this::handleClick;
    this.handleRequestClose = this::handleRequestClose;
  }

  render() {
    const { open, anchorEl } = this.state;
    return (
      <div>
        <MenuIcon hoverColor={lightBlue} onClick={this.handleClick} />
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
