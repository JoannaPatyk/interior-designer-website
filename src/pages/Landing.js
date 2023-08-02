import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import MainPartLanding from '../components/MainPartLanding';
import InformationPanel from '../components/InformationPanel';

function Landing() {
    return (
        <div>
            <Logo />
            <Menu />
            <MainPartLanding />
            <InformationPanel />
        </div>
    );
}

export default Landing;
