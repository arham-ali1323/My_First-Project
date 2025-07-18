import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../images/logo.png";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="60"
            height="auto"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/solution">Solution</Nav.Link>
            <Nav.Link as={NavLink} to="/pricing">Pricing</Nav.Link>
            <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Button as={NavLink} to="/signin" className="login">
              Login
            </Button>
            <Button as={NavLink} to="/getstarted" className="nav-btn">
              Get Started
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
