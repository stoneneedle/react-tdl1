import React from "react";
import { Navbar, Container, Nav, } from "react-bootstrap";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home" className="justify-content-start">
              <img src="https://i.ibb.co/25Z0YDG/BucketSM.png" /> BucketListr-TDL
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="https://stoneneedle.github.io/">Home</Nav.Link>
                <Nav.Link href="https://stoneneedle.github.io/about.html">
                  About
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
