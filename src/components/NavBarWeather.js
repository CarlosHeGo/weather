import React, { useContext } from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router'
import { WeatherContext } from '../context/WeatherContext'

function NavBarWeather() {

    const {cities} = useContext(WeatherContext);

    const ciudades = [...new Set(cities.map((c) => c.nombre))].sort();

    return (
        <Navbar>
            <Container>
                <Navbar.Brand as={NavLink} to={'/'}>El tiempo</Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Ciudades" id="basic-nav-dropdown">
                            {ciudades.map((ciudad) => (
                                <NavDropdown.Item as={NavLink} to={`/ciudad/${ciudad}`}>{ciudad}</NavDropdown.Item>
                            ))}
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarWeather