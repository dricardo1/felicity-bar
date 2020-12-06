import React from "react";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroBtn,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroTitleP,
  HeroP,
} from "./HeroElements.js";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroTitleP>Welcome to Columbia's Famous</HeroTitleP>
          <HeroH1 className="fade-in" >Felicity Bar & Grill</HeroH1>
          <HeroP className="fade-in-p">
            Chef Ben will keep you coming back for his wings, burgers, seafood,
            pizzas, dinners & more!
          </HeroP>
          <HeroBtn className="pulseBtn">
            <a href="tel:803-851-4597">ORDER NOW</a>
          </HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
