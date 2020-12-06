import styled from "styled-components";
import bgImg from "../../images/food-2.jpg";

export const MenuContainer = styled.div`
  background-color: #222;
  background: url(${bgImg}) no-repeat right top;
  background-position: center;
  background-size: cover;
  height: 100vh;
  max-height: 100%;
  padding: 0 0 10vh 0;
  
`;

export const MenuContent = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  padding: 0 0 5vh 0;
  margin: auto;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  max-height: 100%;
  width: 70vw;
  padding: 0 2rem;
  color: #fff;
  font-weight: bold;

  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const MenuH1 = styled.h1`
  font-size: clamp(3rem, 10vw, 5rem);
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  border-left: 3px solid red;
  border-bottom: 3px solid red;
`;

export const MenuP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  margin-bottom: 2rem;
  letter-spacing: 2px;
`;

export const MenuTitleP = styled.p`
  font-size: clamp(1.15rem, 2.5vw, 1.25rem);
  padding: 0 .5rem;
  letter-spacing: 2px;
`;

export const MenuBtn = styled.button`
  font-size: 1.25rem;
  padding: 1rem 3rem;
  background-color: red;
  color: #fff;
  font-weight: bold;
  border: none;
  transition: 0.2s ease-out;
  border-radius: 6px;

  &:hover {
    background: #d32e2e;
    border: none;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
