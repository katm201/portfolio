/*
 *
 * NAV MENU COMPONENT
 *
 */

export function handleClick(event) {
  event.preventDefault();

  this.setState({
    open: true,
    anchorEl: event.currentTarget,
  });
}

export function handleRequestClose() {
  this.setState({
    open: false,
  });
}
