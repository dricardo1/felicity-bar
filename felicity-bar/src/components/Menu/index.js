import React from 'react';
import {MenuContainer, MenuBtn, MenuContent, MenuH1, MenuItems, MenuTitleP, MenuP} from './MenuElements.js';

const Menu = () => {
    return (
        
        <MenuContainer>
            <MenuContent>
                <MenuItems>
                    <MenuTitleP>Chef Ben's Famous</MenuTitleP>
                    <MenuH1>Bar & Grill Grub</MenuH1>
                    <MenuP>CHEF BEN prepares his FRESH GRILL GRUB to order! What you got a taste for?</MenuP>
                    <MenuBtn id="menuBtn" className="pulseBtn">
                        <a href="../../images/menu-felicity-bar-and-grill.pdf" download>Download Menu</a></MenuBtn>
                </MenuItems>
            </MenuContent>
        </MenuContainer>

    )
}

export default Menu
