import React from "react";
import logo from "../components/assets/logo.png";
import { Nav, Navbar, Container } from "react-bootstrap"

const Header = () => {
  return (
    <>

<Navbar collapseOnSelect className="navabar" expand="lg"  >
  <Container>
  <Navbar.Brand href="#home"> <img className="logo-image" src= {logo} alt=""/>   </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav >
      <Nav.Link className="nav-item" href="#Home">Home</Nav.Link>
      <Nav.Link className="nav-item" href="#Pricing">Pricing</Nav.Link>
      <Nav.Link className="nav-item" href="#Supports">Supports</Nav.Link>
      <Nav.Link className="nav-item" href="#Developers">Developers</Nav.Link>
      <Nav.Link className="nav-item" href="#Login">Login</Nav.Link>
      <Nav.Link className="nav-item2" href="#Create-account">Create Acoount</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};

export default Header;
