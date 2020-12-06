import React from "react";
import { Nav, NavLogo, NavLink, NavHeader, NavHamburger } from "./navbarElements";

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLogo /> 
        <NavHeader><h1>Felicity Bar & Grill</h1></NavHeader>       
        <NavLink to="/">
        <NavHamburger />
        </NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
