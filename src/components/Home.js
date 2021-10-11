import React from "react";
import logo from "../components/assets/logo.png";
import {Nav, Navbar, Container} from "react-bootstrap"

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Navbar  className="navbar-css" >
        <Container fluid >
          {/* <Navbar.Brand  href="#home"><span className="logo-css">BlackList </span> </Navbar.Brand> */}
          <Navbar.Brand  href="#home"> <img className="logo-image" src= {logo} alt=""/>  </Navbar.Brand>
          <Nav className="ml-alto">
            <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-item"  href="#features">Pricing</Nav.Link>
            <Nav.Link className="nav-item"  href="#pricing">Supports</Nav.Link>
            <Nav.Link className="nav-item"  href="#pricing">Developers</Nav.Link>
            <Nav.Link className="nav-item"  href="#pricing">Login</Nav.Link>
            <Nav.Link className="nav-item2"  href="#pricing">Create Account</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Home;
