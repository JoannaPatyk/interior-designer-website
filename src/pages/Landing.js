import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Photos from '../components/Photos';
import Information from '../components/Information';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
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
                <Banner />
                <Logo />
                <Menu />
                <Photos />
                <Information />
                <Services />
                {showButton && (
                    <button id="btn-up" onClick={handleButtonUp}>
                        <MdKeyboardDoubleArrowUp className="btn-up-icon" />
                    </button>
                )}
                <div className="form-container">
                    <Form />
                </div>
            </div>
        </Wrapper>
    );
}

export default Landing;
