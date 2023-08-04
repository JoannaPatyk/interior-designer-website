import React from 'react';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/Details';
import fb from '../assets/img/facebook.png';
import ig from '../assets/img/instagram.png';

function Details() {
    return (
        <Wrapper>
            <div className="details-container">
                <a href="https://www.instagram.com/">
                    <img src={fb} className="facebook media-icon" alt="facebook" />
                </a>
                <a href="https://www.facebook.com/">
                    <img src={ig} className="instagram media-icon" alt="instagram" />
                </a>
                <div className="detail-element">
                    <HiOutlinePhone className="icon" />
                    <p>(+48) 888 888 888</p>
                </div>
                <div className="detail-element">
                    <HiOutlineMail className="icon" />
                    <p>e-mail: email@gmail.com</p>
                </div>
            </div>
        </Wrapper>
    );
}

export default Details;
