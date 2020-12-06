import styled from "styled-components";
import bgImg from "../../images/food-dark.jpg";

export const HeroContainer = styled.div`
  background-color: #222;
  background: url(${bgImg}) no-repeat right top;
  background-position: center;
  background-size: cover;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  max-height: 100%;
  width: 100vw;
  padding: 2rem;
  margin: 1em auto;
`;

export const HeroItems = styled.div`
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

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 4.5rem);
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  border-left: 3px solid red;
  border-bottom: 3px solid red;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.25rem;
  padding: 1rem 3rem;
  background-color: red;
  color: #fff;
  font-weight: bold;
  border: none;
  transition: 0.2s ease-out;
  border-radius: 6px;

  &:hover {
    background: gold;
    border: none;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #222;
  }
`;
