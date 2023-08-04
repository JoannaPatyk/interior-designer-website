import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Photos from '../components/Photos';
import Information from '../components/Information';
import { HiArrowLongDown } from 'react-icons/hi2';
import Services from '../components/Services';

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
        <div className="main-container">
            <Logo />
            <Menu />
            <Photos />
            <Information />
            <Services />
            {showButton && (
                <button id="btn-up" onClick={handleButtonUp}>
                    <HiArrowLongDown />
                </button>
            )}
        </div>
    );
}

export default Landing;
