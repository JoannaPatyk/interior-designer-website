import React from 'react';
import Wrapper from '../assets/wrappers/Details';
import { PiInstagramLogoThin, PiFacebookLogoThin, PiPhoneThin, PiChatCircleThin } from 'react-icons/pi';

function Details() {
    return (
        <Wrapper>
            <div className="details-container">
                <div className="media-container">
                    <a href="https://www.instagram.com/">
                        <PiFacebookLogoThin className="facebook media-icon" />
                    </a>
                    <a href="https://www.facebook.com/">
                        <PiInstagramLogoThin className="instagram media-icon" />
                    </a>
                </div>
                <div className="data-container">
                    <div className="detail-element">
                        <PiPhoneThin className="icon" />
                        <p>(+48) 888 888 888</p>
                    </div>
                    <div className="detail-element">
                        <PiChatCircleThin className="icon" />
                        <p>e-mail: email@gmail.com</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Details;
