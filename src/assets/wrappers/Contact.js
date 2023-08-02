import styled from 'styled-components';

const Wrapper = styled.div`
    .contact-container {
        position: relative;
        width: 100%;
        height: 90vh;
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
        height: 1px;
        margin: 0 auto;
        background-color: var(--black);
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
        font-weight: 500;
    }

    h3 {
        width: 25vw;
        font-weight: 400;
        letter-spacing: 0.15rem;
        padding: 0.5rem;
        text-align: center;
    }

    span {
        color: var(--primary-500);
        font-weight: 400;
    }

    input,
    textarea {
        width: 25vw;
        margin: 0.85rem 0;
        padding: 1rem;
        font-family: var(--primary-fontFamily);
        border: 1px solid var(--black);
        border-radius: 10px;
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
        font-size: 0.8rem;
        width: 25vw;
        display: grid;
        grid-template-columns: 1rem auto;
    }

    .form-control p {
        margin-left: 2.2rem;
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

    .menu-icon {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: calc(5vh / 2);
        transform: translateY(-50%);
        left: 1.9%;
        z-index: 100;
        color: var(--white);
        font-size: 1.5rem;
        cursor: pointer;
    }

    .menu-box {
        position: absolute;
        top: calc(5vh / 2);
        transform: translateY(-50%);
        left: -120%;
        z-index: 100;
        transition: 1s;
    }

    .menu-open {
        left: 5%;
    }
`;

export default Wrapper;
