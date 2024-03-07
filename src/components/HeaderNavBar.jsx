import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from "@fortawesome/free-solid-svg-icons";
import IMAGES from '../images/images';


const HeaderNavBar = () => {

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="https://www.alokknight.com" className='links' >
          <img
            alt="Logo512"
            src={IMAGES.logo512}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />{'  '}
        </Navbar.Brand>

          <img
            alt="Star Wars Logo"
            src={IMAGES.logo192}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
          <img
            alt="Star Wars Logo"
            src={IMAGES.Star}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
        <Nav.Item>
          <Nav.Link as={Link} to="/star-war-planets" eventKey="link-1" className='text-light links navBarLink'>
            <FontAwesomeIcon icon={fas.faHome} /> HOME
          </Nav.Link>
          <Nav.Link as={Link} to="/favourites" eventKey="link-1" className='text-light links navBarLink'>
            <FontAwesomeIcon icon={fas.faHeart} /> Favourites
          </Nav.Link>
        </Nav.Item>
      </Container>
    </Navbar>
  );
}

export default HeaderNavBar;