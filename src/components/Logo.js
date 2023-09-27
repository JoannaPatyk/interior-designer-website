import React from 'react';
import logo from '../assets/img/logo.png';
import Wrapper from '../assets/wrappers/Logo';
import background from '../assets/img/flowers.png';

function Logo() {
    return (
        <Wrapper>
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
                <img src={background} className="logo-background-image" alt="Tło" />
            </div>
        </Wrapper>
    );
}

export default Logo;
