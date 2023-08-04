import React, { useState, useEffect } from 'react';
import room1 from '../assets/img/room-5.jpg';
import Wrapper from '../assets/wrappers/Photos';
import { Link } from 'react-router-dom';

function Photos() {
    const titles = ['kreatywność', 'funkcjonalność', 'szczegóły i styl'];
    const [title, setTitle] = useState(titles[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % 3);
            setTitle(titles[index]);
        }, 4000);

        return () => clearInterval(interval);
    }, [titles, index]);

    return (
        <Wrapper>
            <div className="main-container">
                <img src={room1} className="slide-1" alt="" />
                <div className="title-container">
                    <div className="main-title">
                        <h2>
                            Zawsze dbam o <span className="title">{title}</span>
                        </h2>
                        <h2>łącząc sztukę z praktycznym podejściem...</h2>
                        <div className="line"></div>
                    </div>
                    <Link to="/contact" className="btn">
                        Kontakt
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
}

export default Photos;
