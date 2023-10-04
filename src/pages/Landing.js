import React from 'react';
import Main from '../components/Main';
import Banner from '../components/Banner';
import Information from '../components/Information';
import PageIndicator from '../components/PageIndicator';
import Services from '../components/Services';
import Form from '../components/Form';
import Wrapper from '../assets/wrappers/Landing';
import images from '../utils/images';

function Landing() {
    return (
        <Wrapper>
            <main className="main-container">
                <Banner />
                <Main />
                <Information />
                <PageIndicator images={images} />
                <Services />
                <div className="form-container">
                    <Form />
                </div>
            </main>
        </Wrapper>
    );
}

export default Landing;
