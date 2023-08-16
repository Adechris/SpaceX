import React from "react";
import { Link } from "react-router-dom";
import { SiSpacex } from "react-icons/si";
import {Navbar, Nav, Container} from 'react-bootstrap'
const Header = () => {
  return (
    <Container fluid='md' className='header'>
    <Navbar expand="lg" className="">
  <Container>
    <Navbar.Brand as={Link} to="/" ><h6 className='spacelogo'> SPACE<SiSpacex/></h6> </Navbar.Brand>
    <Navbar.Toggle className='shadow-none bg-white'  aria-controls="basic-navbar-nav" />
  </Container>
  
  <Container>
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-end">
        <Nav.Link as={Link} to="/capsule" > <span className='list-item '>CAPSULES</span></Nav.Link>
        <Nav.Link as={Link}  to="/core"> <span className='list-item '>CORES</span> </Nav.Link>
        <Nav.Link as={Link}  to="/dragon"><span className='list-item '>DRAGONS</span></Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
   
  </Container>
</Navbar>
</Container>
  );
};

export default Header;
