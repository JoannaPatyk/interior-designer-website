import React from 'react';
import Wrapper from '../assets/wrappers/Contact';
import Logo from '../components/Logo';
import SmallMenu from '../components/SmallMenu';
import Form from '../components/Form';

function Contact() {
    return (
        <Wrapper>
            <SmallMenu />
            <Logo />
            <div className="contact-container">
                <Form />
            </div>
        </Wrapper>
    );
}

export default Contact;
