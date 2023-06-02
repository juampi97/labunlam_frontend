
import React from "react";
// Import react-router-dom
import { Link } from "react-router-dom";
// Import components from react-bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// Import components propios
import CartWidget from "./CartWidget";
// Import images
import unlamLogo from "../assets/logo_unlam.svg";

function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>
              <img src={unlamLogo} className="navbar_logo" alt="Logo marca" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={"/"}>
                <Nav.Item className="nav_text">Inicio</Nav.Item>
              </Link>
              <Link to={"/proyectores"}>
                <Nav.Item className="nav_text">Proyectores</Nav.Item>
              </Link>
              <Link to={"/notebooks"}>
                <Nav.Item className="nav_text">Notebooks</Nav.Item>
              </Link>
              <Link to={"/instrumentos"}>
                <Nav.Item className="nav_text">Instrumentos</Nav.Item>
              </Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;