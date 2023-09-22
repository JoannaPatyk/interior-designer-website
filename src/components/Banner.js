import React from 'react';
import Wrapper from '../assets/wrappers/Banner';
import TextAnimation from './TextAnimation';

function Banner() {
    return (
        <Wrapper>
            <div className="banner-container">
                <TextAnimation
                    text={`Witaj na stronie, gdzie design staje się rzeczywistością. Jesteśmy pasjonatami sztuki tworzenia pięknych, funkcjonalnych i inspirujących przestrzeni...`}
                />
            </div>
        </Wrapper>
    );
}

export default Banner;
