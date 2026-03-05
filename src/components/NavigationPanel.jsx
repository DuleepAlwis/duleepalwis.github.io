import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export const NavigationPanel = ()=>{
return (<>
<Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="blue">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#Techstack">Technologies</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>

            

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

    </>
  )
}