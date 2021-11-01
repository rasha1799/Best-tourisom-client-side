import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth'

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"> <img src={logo} style={{width:50, marginTop: -7}} />Ural Ponkhi</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                            <Nav.Link as={Link} to="/addService">Add Service</Nav.Link>
                        
                            <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                        
                            <Nav.Link as={Link} to="/allOrders">Manage All Orders</Nav.Link>
                        
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