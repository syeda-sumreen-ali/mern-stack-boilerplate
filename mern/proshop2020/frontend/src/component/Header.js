import React from "react";

import { IoMdCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa"

import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">PROSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/cart">
                <IoMdCart size="1.3em" style={{ marginRight: 3 }} />
              Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUserCircle size="1.3em" style={{ marginRight: 3 }} />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
