import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Banner';
import TextAnimation from './TextAnimation';
import { MdOutlineContactSupport } from 'react-icons/md';

function Banner() {
    return (
        <Wrapper>
            <div className="banner-container">
                <Link to="/contact" className="contact-icon">
                    <MdOutlineContactSupport />
                </Link>
                <TextAnimation text={`witaj na stronie, gdzie design staje się rzeczywistością...`} />
            </div>
        </Wrapper>
    );
}

export default Banner;
