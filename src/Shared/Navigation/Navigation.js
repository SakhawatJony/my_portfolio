import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
        <Navbar bg=""  variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home" className="text-black fw-bold">SAKHAWAT</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link className="text-black fw-bold" to="/home">Home</Nav.Link>
    <Nav.Link className="text-black fw-bold" to="/about">About</Nav.Link>
    <Nav.Link className="text-black fw-bold" to="myPortfolio">PORTFOLIO</Nav.Link>
    <Nav.Link className="text-black fw-bold" to="/contact">Contact Me</Nav.Link>
      <Navbar.Text className="text-black">
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Navigation;