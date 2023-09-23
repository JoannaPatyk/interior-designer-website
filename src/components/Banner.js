import React from 'react';
import Wrapper from '../assets/wrappers/Banner';
import TextAnimation from './TextAnimation';

function Banner() {
    return (
        <Wrapper>
            <div className="banner-container">
                <TextAnimation text={`Witaj na stronie, gdzie design staje się rzeczywistością...`} />
            </div>
        </Wrapper>
    );
}

export default Banner;
