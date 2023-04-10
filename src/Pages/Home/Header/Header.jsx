import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png';
import './Header.css';

const Header = () => {

    const { user, logout } = useAuth();

    return (
        <div className="head-bg">
           <div className="container  d-none d-md-block ">
            <div className="d-flex bd-highlight mb-1 text-white ">
              <div className="me-auto p-3 bd-highlight">
              OFFLINE AND ONLINE HOMEOPATHY CONSULTATION
              </div>
              <div className="p-3 bd-highlight "><a href = "mailto: audesaperemdms@gmail.com" target="_blank">audesaperemdms@gmail.com</a></div>
              <div className="p-3 bd-highlight "><a href="https://www.youtube.com/@audesapere-op6zp" target="_blank">Youtube Channel</a></div>
              <div className="p-3 bd-highlight"><a href="tel:9598593661" target="_blank">9598593661</a></div>
            </div>
          </div>
            <Navbar className="navbar" collapseOnSelect expand="lg">
            
                <Container className="container-head mb-2">
                    
                    <Navbar.Brand href="/home"><img className='Header-logo'  src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Home</Link>
                            <Link to="/about" className='list-item text-decoration-none'>About</Link>
                            <Link to="/service" className='list-item text-decoration-none'>Service</Link>
                            <Link to="/dentist" className='list-item text-decoration-none'>Our Doctors</Link>
                            <Link to="/contact" className='list-item text-decoration-none'>Contact</Link>
                            {user.email 
                            ?
                            <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
                            :
                            <Link to="/login" type="button" className="btn btn-danger">Login</Link>
                            }
                            {user.email &&
                                <Navbar.Text><FontAwesomeIcon icon={faUser} /><span className="userName">{user.displayName}</span></Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;