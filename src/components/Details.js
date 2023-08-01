import React from 'react';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/Details';

function Details() {
    return (
        <Wrapper>
            <div className="details-container">
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
