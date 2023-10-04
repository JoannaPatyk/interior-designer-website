import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-container {
        position: relative;
        width: 100%;
        padding: 5rem auto;
        margin-top: 10rem;
        overflow: hidden;
    }

    .background-image {
        position: absolute;
        bottom: -5%;
        left: -1%;
        z-index: -10;
    }

    .logo-container {
        margin-top: 4rem;
    }

    .contact-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact-form {
        width: 50%;
        margin: 3rem 0;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 20px;
        background-color: var(--primary-100);
    }

    h1,
    h2,
    h3 {
        padding: 0.5rem;
        font-weight: 900;
        text-align: center;
        line-height: 1.5;
        letter-spacing: var(--letterSpacing);
        filter: drop-shadow(2px 2px var(--white));
    }

    h1 {
        width: 70%;
        font-size: 2.5rem;
        color: var(--blue);
        letter-spacing: 1px;
        text-transform: uppercase;

        span {
            color: var(--pink);
        }
    }

    h2 {
        font-size: 2rem;
        color: var(--green);
    }

    h3 {
        font-size: 1.6rem;
    }

    span {
        color: var(--red);
        font-weight: 900;
        text-transform: uppercase;
    }

    input,
    textarea {
        width: 35vw;
        margin: 0.85rem 0;
        padding: 1rem;
        font-family: var(--primary-fontFamily);
        border: none;
        border-radius: 15px;
        transition: var(--transition);
    }

    input::placeholder,
    textarea::placeholder {
        font-size: 1rem;
        font-family: var(--primary-fontFamily);
    }

    input:hover,
    textarea:hover {
        box-shadow: var(--shadow-3);
    }

    input {
        height: 4vh;
    }

    textarea {
        padding-top: 1rem;
        height: 20vh;
        margin-bottom: 1rem;
    }

    .agreement {
        display: flex;
        margin: 0.5rem 0;

        p {
            line-height: 2;
            font-size: 0.9rem;
        }
    }

    form {
        display: grid;
        place-content: center;
        margin: 1rem;
    }

    .form-control {
        width: 28vw;
        font-size: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    input[type='checkbox'] {
        -webkit-appearance: none;
        display: grid;
        place-content: center;
        appearance: none;
        width: 0.35rem;
        height: 0.35rem;
        color: var(--orange);
        border: 1px solid var(--orange);
        border-radius: 50px;
    }

    input[type='checkbox']::before {
        content: '';
        width: 0.8rem;
        height: 0.8rem;
        color: var(--orange);
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: var(--shadow-2);
        box-shadow: var(--shadow-2);
    }

    input[type='checkbox']:checked::before {
        transform: scale(1);
    }

    input[type='checkbox']:checked {
        outline: max(2px, 0.15em) solid currentColor;
        outline-offset: max(2px, 0.15em);
    }

    .btn {
        margin-top: 2rem;
    }

    @media (max-width: 1700px) {
        h1 {
            font-size: 2.2rem;
        }

        h2 {
            font-size: 1.8rem;
        }

        h3 {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 1610px) {
        .form-control,
        input,
        textarea {
            width: 35vw;
        }

        .contact-form {
            width: 60%;
        }

        .agreement {
            p {
                font-size: 0.8rem;
            }
        }
    }

    @media (max-width: 1450px) {
        .contact-form {
            width: 70%;
        }

        .form-control,
        input,
        textarea {
            width: 40vw;
        }
    }

    @media (max-width: 1350px) {
        .btn {
            width: 40%;
        }

        h1 {
            width: 60%;
            font-size: 2rem;
        }

        h2 {
            font-size: 1.6rem;
        }

        h3 {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 1280px) {
        h1 {
            font-size: 1.8rem;
        }

        h2 {
            font-size: 1.4rem;
        }

        h3 {
            font-size: 1rem;
        }
    }

    @media (max-width: 1195px) {
        .contact-container {
            margin-top: 5rem;
        }
    }

    @media (max-width: 1050px) {
        .contact-form {
            width: 65%;
        }

        input,
        textarea {
            width: 50vw;
        }

        h1 {
            width: 70%;
        }

        .btn {
            width: 45%;
            margin-top: 1rem;
        }
    }

    @media (max-width: 850px) {
        h1 {
            width: 80%;
            font-size: 1.6rem;
        }

        h2 {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 700px) {
        .contact-form {
            width: 80%;
        }

        h1 {
            font-size: 1.4rem;
        }

        h2 {
            font-size: 1rem;
        }

        h3 {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 680px) {
        .contact-container {
            margin-top: 10rem;
        }
    }

    @media (max-width: 500px) {
        .contact-form {
            width: 85%;
        }

        .form-control,
        input,
        textarea {
            width: 60vw;
        }

        h1 {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 420px) {
        .contact-container {
            margin-top: 7rem;
        }
        h1 {
            width: 90%;
            padding: 0;
            font-size: 1rem;
        }

        .form-control {
            width: 65vw;
        }
    }
`;

export default Wrapper;
