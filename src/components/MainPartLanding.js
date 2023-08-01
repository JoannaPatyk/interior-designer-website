import React from 'react';
import room1 from '../assets/img/room-3.jpg';
import Wrapper from '../assets/wrappers/MainPartLanding';
import { Link } from 'react-router-dom';

function MainPartLanding() {
    return (
        <Wrapper>
            <div className="main-container">
                <img src={room1} className="slide-1" alt="" />
                <div className="title-container">
                    <div className="title">
                        <h2>Zawsze dbam o</h2>
                        <div className="background">
                            <h1>kreatywność, styl, funkcjonalność</h1>
                        </div>
                        <h2>Projektuje wnętrza łącząc sztukę z praktycznym podejściem...</h2>
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

export default MainPartLanding;
