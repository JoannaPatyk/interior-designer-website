import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-container {
        position: relative;
        width: 100%;
        height: 89vh;
        overflow: hidden;
    }

    .btn-back {
        background-color: var(--primary-300);
    }

    .btn-back:hover {
        background-color: var(--primary-500);
    }

    .line {
        width: 50%;
        margin: 0 auto;
    }

    .contact-wrapper {
        height: 65vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact-form {
        height: 65vh;
        width: 30%;
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin: 0.5rem;
        font-weight: 500;
        text-align: center;
        font-family: var(--primary-fontFamily);
    }

    h3 {
        width: 45vw;
        font-weight: 400;
        letter-spacing: 0.15rem;
        padding: 0.5rem;
        text-align: center;
    }

    span {
        color: var(--primary-500);
        font-weight: 600;
    }

    input,
    textarea {
        width: 28vw;
        margin: 0.85rem 0;
        padding: 1rem;
        font-family: var(--primary-fontFamily);
        border: 1px solid var(--black);
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
        color: var(--primary-300);
        border: 1px solid var(--black);
        border-radius: 50px;
    }

    input[type='checkbox']::before {
        content: '';
        width: 0.8rem;
        height: 0.8rem;
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
            width: 40%;
        }
    }

    @media (max-width: 1350px) {
        .form-control,
        input,
        textarea {
            width: 40vw;
        }

        .btn {
            width: 40%;
        }
    }

    @media (max-width: 1050px) {
        .form-control,
        input,
        textarea {
            width: 45vw;
        }

        h2 {
            font-size: 1.3rem;
        }

        h3 {
            font-size: 1rem;
        }

        .btn {
            width: 45%;
        }
    }
`;

export default Wrapper;
