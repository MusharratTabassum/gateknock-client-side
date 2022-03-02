import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import "./Header.css"
import image from "./logo.jpg"

const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <Navbar expand="lg" sticky="top">
                <Container className='mx-4' >
                    <Navbar.Brand href="/" className='logos d-flex'>
                        <img src={image} style={{ width: "80px" }} alt="" />

                        <h1 className='mt-3'>GateKnock<span className="red">'</span></h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="my-2 mx-2 my-lg-0 ms-auto "
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link activeStyle={activeStyle} className='header-link' as={Link} to='/home'> <li>Home</li></Nav.Link>
                            <Nav.Link className='header-link' as={HashLink} to="/home#services"><li>Services</li> </Nav.Link>
                            <Nav.Link className='header-link' as={Link} to='/contact' >Contact</Nav.Link>

                            {user?.email ?
                                <Nav.Link className='header-link' as={Link} to="/bookings">MyOrders</Nav.Link> : ''
                            }
                            {user?.email ?
                                <Nav.Link className='header-link' as={Link} to="/allorders">AllBooking</Nav.Link> : ''
                            }
                            {user?.email == 'admin123@gmail.com' ?
                                <Nav.Link className='header-link' as={Link} to="/addservice">AddService</Nav.Link> : ''
                            }


                            {user?.email == 'admin123@gmail.com' ?
                                <Nav.Link className='header-link' as={Link} to="/manageorder">ManageBooking</Nav.Link>
                                : ''
                            }
                            {user?.email ?
                                <Nav.Link className='header-link ' as={Link} to="/">Hello! {user.displayName}</Nav.Link> : ''
                            }
                            {user?.email ?
                                <Nav.Link className='header-link' >
                                    <li><Button className='p-0 logout-btn ' onClick={logOut} variant="light">Logout</Button></li>
                                </Nav.Link>
                                :
                                <Nav.Link className='header-link' as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;