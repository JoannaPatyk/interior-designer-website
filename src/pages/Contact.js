import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { IoIosArrowBack } from 'react-icons/io';
import Wrapper from '../assets/wrappers/Contact';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import SmallMenu from '../components/SmallMenu';

function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const toggleIcon = isOpen ? <HiMenu onClick={handleToggle} /> : <IoIosArrowBack onClick={handleToggle} />;

    return (
        <Wrapper>
            <div className="menu-icon">{toggleIcon}</div>
            <div className={`${isOpen ? 'menu-box' : 'menu-box menu-open'}`}>
                <SmallMenu />
            </div>
            <div className="contact-container">
                <Logo />
                <div className="line"></div>
                <div className="contact-wrapper">
                    <form className="contact-form">
                        <h2>FORMULARZ KONTAKTOWY</h2>
                        <h3>
                            z chęcią odpowiem na <span>Twoje</span> pytania
                        </h3>
                        <input type="text" placeholder="Imię" />
                        <input type="email" placeholder="E-mail" />
                        <textarea placeholder="Wiadomość..."></textarea>
                        <div className="agreement">
                            <label className="form-control">
                                <input type="checkbox" id="checkbox" name="checkbox" />
                                <p>
                                    WYRAŻAM ZGODĘ NA PRZETWARZANIE MOICH DANYCH OSOBOWYCH ZGODNIE Z USTAWĄ O OCHRONIE
                                    DANYCH OSOBOWYCH W ZWIĄZKU Z REALIZACJĄ ZGŁOSZENIA. POLITYKA PRYWATNOŚCI
                                </p>
                            </label>
                        </div>
                        <button className="btn" type="submit">
                            wyślij
                        </button>
                        <Link to="/" className="btn btn-back">
                            wróć
                        </Link>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;
