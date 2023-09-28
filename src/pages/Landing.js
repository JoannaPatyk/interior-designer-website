import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Information from '../components/Information';
import PageIndicator from '../components/PageIndicator';
import Services from '../components/Services';
import Form from '../components/Form';
import Banner from '../components/Banner';

import Wrapper from '../assets/wrappers/Landing';
import background from '../assets/img/flowers.png';
import images from '../utils/images';

function Landing() {
    return (
        <Wrapper>
            <main className="main-container">
                <div className="landing-container">
                    <Banner />
                    <Logo />
                    <Menu />
                    <img src={background} className="landing-background-image" alt="Tło" />
                </div>
                <PageIndicator images={images} />
                <Information />
                <Services />

                <div className="form-container">
                    <Form />
                </div>
            </main>
        </Wrapper>
    );
}

export default Landing;
