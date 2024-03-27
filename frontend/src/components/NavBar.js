import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav>
    </Navbar>
);

export default NavBar;
