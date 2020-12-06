import React from 'react';
import Navbar from '../Navbar';
import {HeroContainer, HeroBtn, HeroContent, HeroH1, HeroItems, HeroP} from './HeroElements.js';

const Hero = () => {
    return (
        
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <p>Welcome to the Famous</p>
                    <HeroH1>Felicity Bar & Grill</HeroH1>
                    <HeroP> "Chef Ben" will keep you coming back with his wings, 
                    burgers, seafood, pizza's, dinners & more!</HeroP>
                    <HeroBtn>ORDER NOW</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>

    )
}

export default Hero
