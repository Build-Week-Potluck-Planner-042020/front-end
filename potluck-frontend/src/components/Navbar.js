import React, { useState } from 'react';
// import {useDarkMode} from '../hooks/useDarkMode';
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  let styles ={color: 'white',
  textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  textDecoration:'none',
  backgroundColor: 'rgba(167, 99, 47)'

}
let styles2 ={
  
}
    
  return (
    <Navbar style={styles} className="navbar" >
        <NavbarToggler style={styles2} onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand style={styles} href="/" className="mr-auto">Pot Luck</NavbarBrand>
        <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem  className='Nav-items'>
                <NavLink style={styles}  href="https://wizardly-darwin-3704db.netlify.app/index.html">Home</NavLink>
                <NavLink style={styles} href="https://wizardly-darwin-3704db.netlify.app/about_us.html">About Us</NavLink>
                <NavLink style={styles} href='/dashboard'>Planner</NavLink>
                <NavLink style={styles} href='/'>Login</NavLink>
              </NavItem>
            </Nav>

          </Collapse>
    </Navbar>
  );
};

export default Navigation;