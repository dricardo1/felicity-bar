import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  NavHeader,
  NavHamburger,
} from "./navbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavLogo />
      <NavHeader>
        <h1>Felicity Bar & Grill</h1>
      </NavHeader>
      <NavLink to="#">
      </NavLink>
      <a href="tel:803-851-4597"><NavHamburger className="pulse"></NavHamburger></a>
    </Nav>
  );
};

export default Navbar;
