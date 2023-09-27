import React from 'react';
import Wrapper from '../assets/wrappers/Contact';
import SmallMenu from '../components/SmallMenu';
import Form from '../components/Form';

function Contact() {
    return (
        <Wrapper>
            <SmallMenu />
            <div className="contact-container">
                <Form />
            </div>
        </Wrapper>
    );
}

export default Contact;
