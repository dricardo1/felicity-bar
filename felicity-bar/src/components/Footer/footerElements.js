import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #000;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: right;
  padding: 1rem, 2rem;
  margin: 0 auto;
  max-width: 100vw;
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 100vw;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem auto 0 auto;
  max-width: 100vw;

  @media screen and (max-width: 780px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 240px;
  :max-width: 100%;
  margin: 0 0 0.5rem 0;
  padding: auto;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  align-items: center;
`;

export const SocialLogo = styled(Link)`
  width: auto;
  display: flex;
  justify-self: start;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-family: "Ultra", serif;
  font-size: 1.25rem;
  font-weight: normal;
  letter-spacing: 1px;
  cursor: pointer;
  padding-left: 1vw;
  margin: 0 0 1rem 2rem;

  @media screen and (max-width: 780px) {
    font-size: 1.1rem;
  }
`;

export const FooterP = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.1rem);
  margin: 0 0 1rem 0;

  letter-spacing: 1px;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 780px) {
    font-size: 1rem;
    padding-left: 6vw;
  }
`;
