import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Profile from './Home/Profile';
import Info from './AboutMe/Info';
import Contact from './ContactMe/Contact';
import Mywork from './Intrests/MyWork';

export default function Navmenu() {
    return ( 
    <Router>
        <div >
        <Navbar bg = "dark"variant = { "dark" }expand = "lg" >
        <Container>
        <Navbar.Brand href = "#home" > Portfolio </Navbar.Brand>   
        <Navbar.Toggle aria-controls = "basic-navbar-nav" />
        <Navbar.Collapse id = "basic-navbar-nav" >
        <Nav className = "me-auto" >
        <Nav.Link as = { Link }to = { "/" } > Home </Nav.Link>   
        <Nav.Link as = { Link }to = { "/Info" } > About </Nav.Link>   
        <Nav.Link as = { Link }to = { "/MyWork" } > MyWork </Nav.Link>   
        <Nav.Link as = { Link }to = { "/Contact" } > Contact </Nav.Link> 
        </Nav>   
        </Navbar.Collapse>   
        </Container>   
        </Navbar>   
        </div>   
        <div>
        <Routes>
        <Route exact path = '/'element = { < Profile /> }/>   
        <Route exact path = '/Info'element = { < Info /> }/>  
        <Route exact path = '/MyWork'element = { < Mywork /> }/>   
        <Route exact path = '/Contact'element = { < Contact /> }/>   
        </Routes>   
        </div>   
        </Router>


    )
}