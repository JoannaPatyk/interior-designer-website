import React from 'react';
import Wrapper from '../assets/wrappers/Details';
import { PiInstagramLogo, PiFacebookLogo, PiPhone, PiChatCircle } from 'react-icons/pi';

function Details() {
    return (
        <Wrapper>
            <div className="details-container">
                <div className="media-container">
                    <a href="https://www.instagram.com/">
                        <PiFacebookLogo className="facebook media-icon" />
                    </a>
                    <a href="https://www.facebook.com/">
                        <PiInstagramLogo className="instagram media-icon" />
                    </a>
                </div>
                <div className="data-container">
                    <div className="detail-element">
                        <PiPhone className="icon" />
                        <p>(+48) 000 000 000</p>
                    </div>
                    <div className="detail-element">
                        <PiChatCircle className="icon" />
                        <p>biuro@katarzynakowalska.pl</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Details;
