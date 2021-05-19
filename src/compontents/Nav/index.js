import React from 'react'
import { Nav, NavLink, NavIcon, Bars, Koszyk } from './Navbarelements'
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizzunia.com</NavLink>
                <NavIcon>
                    <Link to="/cart"><Koszyk >Koszyk</Koszyk></Link>
                    <p ><Link to="/menu">Menu</Link></p>
                    <Bars />
                </NavIcon>

            </Nav>
        </>
    )
}

export default Navbar