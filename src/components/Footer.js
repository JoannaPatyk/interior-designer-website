import React from 'react';
import Wrapper from '../assets/wrappers/Footer';
import { PiInstagramLogoThin, PiFacebookLogoThin } from 'react-icons/pi';

function Footer() {
    return (
        <Wrapper>
            <div className="footer-container">
                <div className="footer-text">
                    <div className="footer-text-element">
                        <h2>The Circle</h2>
                        <p>ul. Mickiewicza 13A/13</p>
                        <p>00-000 Kraków</p>
                        <p>NIP: 0000000000</p>
                    </div>
                    <div className="footer-text-element">
                        <h2>Kontakt</h2>
                        <p>tel: (+48) 000 000 000</p>
                        <p>tel: (+48) 000 000 000</p>
                        <p>mail: biuro@katarzynakowalska.pl</p>
                    </div>
                    <div className="footer-text-element">
                        <h2>Media</h2>
                        <div className="media-container">
                            <a href="https://www.instagram.com/">
                                <PiFacebookLogoThin className="facebook media-icon" />
                            </a>
                            <a href="https://www.facebook.com/">
                                <PiInstagramLogoThin className="instagram media-icon" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-line" />
                <p className="copyright">Copyright © 2023 JP || All rights reserved</p>
            </div>
        </Wrapper>
    );
}

export default Footer;
