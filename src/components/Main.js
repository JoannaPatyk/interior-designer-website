import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

import background from '../assets/img/flowers.png';
import Wrapper from '../assets/wrappers/Landing';

let sectionStyle = {
    position: 'absolute',
    height: '100vh',
    width: '100%',
    top: '0%',
    left: '0',
    zIndex: '-10',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${background})`
};

function Main() {
    return (
        <Wrapper>
            <div className="landing-container">
                <div style={sectionStyle}></div>
                <Logo />
                <Menu />
            </div>
        </Wrapper>
    );
}

export default Main;
