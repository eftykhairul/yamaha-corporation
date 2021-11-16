
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <>
            <h1 className='text-primary my-3 middle'>YAMAHA Corporation Ltd.</h1>
            <p className='middle'>Dhaka, Bangladesh</p>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Yamaha Bangladesh</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end"> 
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Products</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Expert</Nav.Link>
                        <Nav.Link as={HashLink} to="/moreServices">Explore</Nav.Link>
                        {user?.email && <Nav.Link as={Link} to="/dashbord">Dashboard</Nav.Link>}
                        {/* <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/addService">Add A Service</NavDropdown.Item>
                            <NavDropdown.Item href="/myOrder">My Orders</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Manage My Order</NavDropdown.Item>
                            
                        </NavDropdown> */}
                        {user?.email?
                            <Button onClick={logOut} variant='primary'>Log Out</Button>:
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;