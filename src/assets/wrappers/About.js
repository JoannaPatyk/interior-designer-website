import styled from 'styled-components';

const Wrapper = styled.div`
    .about-container {
        height: 190vh;
        width: 80%;
        display: grid;
        place-items: center;
        grid-template-rows: 1fr 1fr 0.25fr;
        gap: 50px;
        margin: 0 auto;
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .img-container {
        height: 55vh;
        width: 55vh;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .work1-img {
        width: 150%;
    }

    .work2-img {
        width: 170%;
    }

    .arrow {
        position: absolute;
        top: 125%;
        left: 50%;
        z-index: -100;
        font-size: 4rem;
        color: var(--primary-300);
        animation: arrow-1 3s infinite;
    }

    .arrow-2 {
        top: 100%;
        animation: arrow-2 3s infinite;
    }

    .description-container-1 {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 80px;
        place-items: center;
    }

    .description-container-2 {
        position: relative;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 10px;
        place-items: center;
    }

    .description-container-2 .description {
        margin-left: 6rem;
    }

    .hello-title {
        font-weight: 300;
        margin: 2rem 0;
    }

    .hello-title span {
        color: var(--primary-300);
    }

    .element {
        width: 70%;
        font-size: 1rem;
        line-height: 2.2;
        font-weight: 300;
        text-align: justify;
    }

    .description span {
        font-weight: 500;
        color: var(--primary-300);
    }

    .message-container {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .message-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .line {
        width: 10rem;
        height: 3px;
        margin-right: -10px;
        background-color: var(--black);
        background: var(--gradient);
    }

    .message-title h1 {
        text-align: right;
    }

    .message-contact {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 300;
    }

    .message-container h3 {
        font-weight: 300;
        margin-bottom: 0.75rem;
    }

    .menu-icon {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: calc(6vh / 2);
        transform: translateY(-50%);
        left: 1.9%;
        z-index: 100;
        color: var(--white);
        font-size: 1.5rem;
        cursor: pointer;
    }

    .menu-box {
        position: absolute;
        top: -100%;
        transform: translateY(-50%);
        left: 5%;
        z-index: 100;
        transition: 1s;
    }

    .menu-open {
        top: calc(6vh / 2);
    }

    .btn {
        margin-bottom: 2rem;
    }

    @keyframes arrow-1 {
        0% {
            opacity: 1;
        }
        50% {
            top: 128%;
            opacity: 0.5;
        }
        100% {
            top: 125%;
            opacity: 1;
        }
    }

    @keyframes arrow-2 {
        0% {
            opacity: 1;
        }
        50% {
            top: 103%;
            opacity: 0.5;
        }
        100% {
            top: 100%;
            opacity: 1;
        }
    }
`;

export default Wrapper;
