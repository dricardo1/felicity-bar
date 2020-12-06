import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  FooterP,
} from "./footerElements.js";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/">&copy; 2020 Felicity Bar & Grill</SocialLogo>
            <FooterP>
              <a href="https://bit.ly/donar-dev" target="_blank">
                Powered By Donar Development, LLC
              </a>
            </FooterP>
            <SocialIcons>
              <SocialIconLink
                to="https://bit.ly/felicity-bar-fb"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                {" "}
                <a href="https://bit.ly/felicity-bar-fb" target="_blank">
                  <FaFacebook />
                </a>
              </SocialIconLink>
              <SocialIconLink
                to="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
