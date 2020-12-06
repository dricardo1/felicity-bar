import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapper,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
} from "./footerElements.js";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to="/">Felicity Bar & Grill</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                to="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
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
