import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../assets/wrappers/PageIndicator';

function PageIndicator({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(currentIndex + 1);

        if (currentIndex === images.length - 1) {
            setCurrentIndex(0);
        }
    }, [currentIndex, images.length]);

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 5000);
        console.log(currentIndex);
        return () => clearInterval(intervalId);
    }, [currentIndex, nextSlide]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <Wrapper>
            <div className="slider-container">
                <div className="slider">
                    <div className="title-container">
                        <h2>
                            Zawsze dbam o <span className="title-span">funkcjonalność</span>
                        </h2>
                        <h2>łącząc sztukę z praktycznym podejściem</h2>
                    </div>

                    {images.map((image, index) =>
                        index === currentIndex ? (
                            <div key={index} className="slide">
                                <img src={image} alt={`Slide ${index + 1}`} />
                            </div>
                        ) : null
                    )}
                </div>
                <div className="dots">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}

PageIndicator.propTypes = {
    images: PropTypes.array
};

export default PageIndicator;
