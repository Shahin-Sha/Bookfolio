import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '../Images/tabler_search.svg'
import Logo from '../Images/Logo.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Nav1() {
  return (
    <div>
      <Navbar expand="lg" data-bs-theme="dark" className="body-tertiary"
        style={{ height: '90px', backgroundColor: 'black', borderRadius: '0px 0px 60px 60px' }}
      >
        <Container fluid>
          <Navbar.Brand href="/Home" style={{ paddingLeft: '50px' }}><img src={Logo} alt='' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/Home" style={{ paddingLeft: '100px' }}>Reading</Nav.Link>
              <Nav.Link href="/" style={{ paddingLeft: '100px' }}>Bookmark</Nav.Link>
              <Nav.Link href="/Signup" style={{ paddingLeft: '100px' }}>Library</Nav.Link>
              <Nav.Link href="#action4" style={{ paddingLeft: '100px' }}>Custom</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="read more..."
                className="me-2"
                aria-label="Search"
                style={{ borderRadius: '100px 0px 0px 100px', backgroundColor: 'black' }}
              />
              <Button  style={{borderRadius:'0px 100px 100px 0px',marginLeft:'-9px',backgroundColor:'black',borderColor:'gray'}}><img src={SearchIcon} alt=''/></Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
