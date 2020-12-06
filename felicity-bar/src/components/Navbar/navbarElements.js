import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaDrumstickBite } from "react-icons/fa";
import Logo from "../../images/logo.jpg";

export const Nav = styled.nav`
  background: transparent;
  height: 13vh;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-family: "Lato", "Open-Sans", "Verdana", "Arial", sans-serif;
`;

export const NavHeader = styled.nav`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 420px) {
    font-size: .85rem;
  }
`;

export const NavLogo = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  background-repeat: no-repeat;
  height: 9vh;
  width: 9vh;
  display: flex;
  flex-grow: 1;
  position: absolute;
  top: 2vh;
  left: 3vh;
  border-radius: 3px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 420px) {
    font-size: 1.1rem;
  }
`;

export const NavIcon = styled.div`
  color: #fff;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const NavHamburger = styled(FaDrumstickBite)`
  height: 1.5em;
  width: auto;
  display: flex;
  flex-grow: 1;
  position: absolute;
  top: 4vh;
  right: 3vh;
  
  &:hover {
    cursor: pointer;
    font-size: 2rem;
    transition: 0.2s ease-out;
  }
`;
