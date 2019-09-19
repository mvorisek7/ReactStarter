import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Alignment, Button, Popover, Menu, Position, Callout } from '@blueprintjs/core';

import { toggleTheme } from '../../redux/slices/ThemeSlice';
import { useSelector, useDispatch } from 'react-redux';
import { POSITION_BOTTOM } from '@blueprintjs/core/lib/esm/common/classes';
import { Box } from 'grommet';

function NavBar() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  function ThemeToggle() {
    return (
      <Menu.Item icon={theme === 'light' ? 'moon' : 'flash'} minimal large onClick={() => setTimeout(() => { dispatch(toggleTheme()) }, 50)} text={theme === 'light' ? 'Dark Theme' : 'Light Theme'}/>
    );
  }

  return (
    <Navbar>
      <Box direction="row" justify="between" >
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Test App</Navbar.Heading>
          <Navbar.Divider />
          <Link className="navButton" to="/"><Button minimal icon="home" text="Home"></Button></Link>
          <Link className="navButton" to="/about/"><Button minimal icon="info-sign" text="About"></Button></Link>
          <Link className="navButton" to="/users/"><Button minimal icon="people" text="Users"></Button></Link>
        </Navbar.Group>
        <Navbar.Group>
          <Callout intent="primary">
            New Info available! Click here for more information!
          </Callout>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <div className="bp3-text-large">Welcome, <b>John Doe</b>!</div>
          <Navbar.Divider />
          <Popover content={
            <Menu>
              <ThemeToggle />
              <Menu.Divider />
              <Menu.Item icon="log-out" intent="danger" text="Logout" />
            </Menu>
          } position={Position.BOTTOM_RIGHT} minimal large>
              <Button minimal rightIcon="chevron-down"/>
          </Popover>
        </Navbar.Group>
      </Box>
    </Navbar>
  );
}

export default NavBar;