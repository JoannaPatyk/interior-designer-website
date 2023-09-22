import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TextAnimation = ({ text }) => {
    const [animatedText, setAnimatedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const animationInterval = setInterval(() => {
            if (currentIndex < text.length) {
                setAnimatedText((prevText) => prevText + text[currentIndex]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                setAnimatedText('');
                setCurrentIndex(0);
            }
        }, 150);

        return () => {
            clearInterval(animationInterval);
        };
    }, [currentIndex, text]);

    return (
        <div>
            <p>{animatedText}</p>
        </div>
    );
};

TextAnimation.propTypes = {
    text: PropTypes.string
};

export default TextAnimation;
