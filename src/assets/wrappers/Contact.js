import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-container {
        position: relative;
        width: 100%;
        background-image: url('https://github.com/JoannaPatyk/interior-designer-website/blob/main/src/assets/img/background.jpg?raw=true');
    }

    .logo-container {
        margin-top: 4rem;
    }

    .contact-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact-form {
        width: 60%;
        margin: 3rem 0;
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--primary-100);
        filter: drop-shadow(10px 10px var(--white));
    }

    h2 {
        margin: 0.5rem;
        font-weight: 800;
        text-align: center;
        color: var(--orange);
        filter: drop-shadow(2px 2px var(--black));
    }

    h3 {
        width: 45vw;
        font-weight: 500;
        letter-spacing: 0.15rem;
        padding: 0.75rem;
        text-align: center;
    }

    span {
        color: var(--orange);
        font-weight: 900;
        filter: drop-shadow(2px 2px var(--black));
    }

    input,
    textarea {
        width: 28vw;
        margin: 0.85rem 0;
        padding: 1rem;
        font-family: var(--primary-fontFamily);
        border: none;
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
        height: 18vh;
        margin-bottom: 1rem;
    }

    .agreement {
        display: flex;
        margin: 0.5rem 0;
    }

    form {
        display: grid;
        place-content: center;
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

    @media (max-width: 1600px) {
        .form-control,
        input,
        textarea {
            width: 35vw;
        }

        .contact-form {
            width: 90%;
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
    }

    @media (max-width: 1050px) {
        .contact-form {
            width: 65%;
        }

        .form-control,
        input,
        textarea {
            width: 50vw;
        }

        h2 {
            font-size: 1.3rem;
        }

        h3 {
            font-size: 1rem;
        }

        .btn {
            width: 45%;
            margin-top: 1rem;
        }
    }

    @media (max-width: 700px) {
        .contact-form {
            width: 75%;
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
    }
`;

export default Wrapper;
