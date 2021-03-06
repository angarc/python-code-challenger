import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const navBar = () => {
  return (
    <Navbar className='navbar-dark' expand="lg">
      <Link to='/' className="navbar-brand">OBCode</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to='/' className='nav-link active'>Home</Link>
          <Link to='/about' className='nav-link active'>About</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navBar
