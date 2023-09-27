import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextAnimation = ({ text }) => {
    const [animatedText, setAnimatedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const animationDelay = 500;

    useEffect(() => {
        const animationInterval = setInterval(() => {
            if (currentIndex < text.length) {
                setAnimatedText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                setAnimatedText('');
                setCurrentIndex(0);
            }
        }, 180);

        const delayTimeout = setTimeout(() => {
            clearInterval(animationInterval);
        }, animationDelay);

        return () => {
            clearInterval(animationInterval);
            clearTimeout(delayTimeout);
        };
    }, [currentIndex, text]);

    return (
        <div className="container">
            <p>{animatedText}</p>
        </div>
    );
};

TextAnimation.propTypes = {
    text: PropTypes.string
};

export default TextAnimation;
