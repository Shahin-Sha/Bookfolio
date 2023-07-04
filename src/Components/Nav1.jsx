import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from '../Images/tabler_search.svg';
import Logo from '../Images/Logo.svg';

export default function Nav1() {
  return (
    <div>
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className="body-tertiary"
        style={{
          height: '90px',
          backgroundColor: 'black',
          borderRadius: '0px 0px 60px 60px',
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          zIndex: '999',
        }}
      >
        <Container fluid>
          <Navbar.Brand href="/Home" style={{ paddingLeft: '50px' }}>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/Home" style={{ paddingLeft: '100px' }}>
                Home
              </Nav.Link>
              {/* <Nav.Link href="/Library/:productId" style={{ paddingLeft: '100px' }}>
                Library
              </Nav.Link> */}
              <Nav.Link href="/" style={{ paddingLeft: '100px' }}>
                Signout
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="read more..."
                className="me-2"
                aria-label="Search"
                style={{
                  borderRadius: '100px 0px 0px 100px',
                  backgroundColor: 'black',
                }}
              />
              <Button
                style={{
                  borderRadius: '0px 100px 100px 0px',
                  marginLeft: '-9px',
                  backgroundColor: 'black',
                  borderColor: 'gray',
                }}
              >
                <img src={SearchIcon} alt="" />
              </Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: '90px' }}></div> {/* Empty div to reserve space for the fixed navbar */}
    </div>
  );
}
