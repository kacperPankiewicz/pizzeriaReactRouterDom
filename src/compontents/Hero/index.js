import React from 'react'
import Navbar from '../Nav/'
import { Link } from 'react-router-dom';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

function Hero() {
    return (
        <HeroContainer>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Najlepsza Pizza w Elblągu!</HeroH1>
                    <HeroP></HeroP>
                    <Link to="/menu"><HeroBtn>Złóż zamowienie</HeroBtn></Link>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
