import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./Navbar.scss";
import logo from "../assets/guiScoz3D_logo.png";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      
        <Link to='/'>
        <img src={logo} />
        </Link>
        <Nav>
          <Nav.Link href="/models">Models</Nav.Link>
          <Nav.Link href="/animations">Animations</Nav.Link>
          <Nav.Link href="/rigs">Rigs</Nav.Link>
        </Nav>
        <NavDropdown title="My projects" id="basic-nav-dropdown">
          <NavDropdown.Item href="/models">Models</NavDropdown.Item>
          <NavDropdown.Item href="/animations">Animations</NavDropdown.Item>
          <NavDropdown.Item href="/rigs">Rigs</NavDropdown.Item>
        </NavDropdown>
       
    </Navbar>
  );
};

export default Navigation;
