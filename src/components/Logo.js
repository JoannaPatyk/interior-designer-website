import React from 'react';
import logo from '../assets/img/sss.png';
import Wrapper from '../assets/wrappers/Logo';

function Logo() {
    return (
        <Wrapper>
            <div className="logo-container">
                <img src={logo} className="logo" alt="logo" />
            </div>
        </Wrapper>
    );
}

export default Logo;
