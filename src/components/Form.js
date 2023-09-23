import React from 'react';
import Wrapper from '../assets/wrappers/Contact';

function Form() {
    return (
        <Wrapper>
            <div className="contact-wrapper">
                <form className="contact-form">
                    <h2>FORMULARZ KONTAKTOWY</h2>
                    <h3>
                        z chęcią odpowiem na <span>Twoje</span> pytania
                    </h3>
                    <input className="name" type="text" placeholder="Imię" />
                    <input className="email" type="email" placeholder="E-mail" />
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
            </div>
        </Wrapper>
    );
}

export default Form;
