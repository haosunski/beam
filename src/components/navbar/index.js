import { NavLink } from "react-router-dom"
import {Navbar, Container, Nav} from "react-bootstrap"

import "./navbar.css"

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to="/" className="navbar-brand">EyeOn beam</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/users" end className="nav-link">Users</NavLink>
                        <NavLink to="/beams/me" className="nav-link">My Beams</NavLink>
                        <NavLink to="/beams/new" className="nav-link">New Beam</NavLink>
                    </Nav>
                    <Nav className="ms-auto">
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                        <NavLink to="/register" className="nav-link">Register</NavLink>
                        <NavLink to="/users/123" className="nav-link">Public Profile</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent