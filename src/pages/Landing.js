import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Photos from '../components/Photos';
import Information from '../components/Information';
import { HiArrowLongDown } from 'react-icons/hi2';
import Services from '../components/Services';
import Form from '../components/Form';
import Banner from '../components/Banner';
import Wrapper from '../assets/wrappers/Landing';

function Landing() {
    const [showButton, setShowButton] = useState(false);

    const handleButtonUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        const position = window.scrollY;
        const halfWindowHeight = window.innerHeight / 2;
        setShowButton(position > halfWindowHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Wrapper>
            <div className="main-container">
                <Logo />
                <Menu />
                <Photos />
                <Banner />
                <Information />
                <Services />
                {showButton && (
                    <button id="btn-up" onClick={handleButtonUp}>
                        <HiArrowLongDown />
                    </button>
                )}
                <div className="form-container">
                    <h4>Skontaktuj się ze mną, razem stworzymy Twój wymarzony dom</h4>
                    <Form />
                </div>
            </div>
        </Wrapper>
    );
}

export default Landing;
