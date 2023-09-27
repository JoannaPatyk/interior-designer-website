import React from 'react';
import Wrapper from '../assets/wrappers/Contact';
import background from '../assets/img/flowers.png';

function Form() {
    return (
        <Wrapper>
            <div className="contact-wrapper">
                <form className="contact-form">
                    <h1>
                        Skontaktuj się ze mną, razem stworzymy <span>Twój wymarzony</span> dom
                    </h1>
                    <h2>FORMULARZ KONTAKTOWY</h2>
                    <h3>
                        z chęcią odpowiem na <span>Twoje</span> pytania
                    </h3>
                    <input className="name" type="text" placeholder="Imię..." />
                    <input className="email" type="email" placeholder="E-mail.." />
                    <textarea className="message" placeholder="Wiadomość..."></textarea>
                    <div className="agreement">
                        <label className="form-control">
                            <input type="checkbox" id="checkbox" name="checkbox" />
                            <p>
                                Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych
                                osobowych w związku z realizacją zgłoszenia, Polityka prywatności.
                            </p>
                        </label>
                    </div>
                    <button className="btn" type="submit">
                        wyślij
                    </button>
                </form>
                <img src={background} className="background-image" alt="Tło" />
            </div>
        </Wrapper>
    );
}

export default Form;
