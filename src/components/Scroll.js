import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

function Scroll() {
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
        <div>
            {' '}
            {showButton && (
                <button id="btn-up" onClick={handleButtonUp}>
                    <MdKeyboardDoubleArrowUp className="btn-up-icon" />
                </button>
            )}
        </div>
    );
}

export default Scroll;
