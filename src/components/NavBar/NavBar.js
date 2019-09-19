import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Alignment, Button } from '@blueprintjs/core';

import { toggleTheme } from '../../redux/slices/ThemeSlice';
import { useSelector, useDispatch } from 'react-redux';

function NavBar() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  function ThemeToggle() {
    return (
      <Button icon={theme === 'light' ? 'moon' : 'flash'} minimal large onClick={() => dispatch(toggleTheme())}/>
    );
  }

  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>Test App</Navbar.Heading>
        <Navbar.Divider />
        <Link className="navButton" to="/"><Button minimal icon="home" text="Home"></Button></Link>
        <Link className="navButton" to="/about/"><Button minimal icon="info-sign" text="About"></Button></Link>
        <Link className="navButton" to="/users/"><Button minimal icon="people" text="Users"></Button></Link>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <ThemeToggle />
      </Navbar.Group>
    </Navbar>
  );
}

export default NavBar;