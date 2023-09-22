import styled from 'styled-components';

const Wrapper = styled.div`
    .about-container {
        width: 70%;
        display: grid;
        place-items: center;
        grid-template-rows: 1fr 1fr 0.25fr;
        gap: 100px;
        margin: 10rem auto 5rem;
    }

    .description {
        display: flex;
        flex-direction: column;
        gap: 40px;
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

    .work1-img,
    .work2-img {
        width: 150%;
    }

    .description-container-1,
    .description-container-2 {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 80px;
        place-items: center;
    }

    .description-container-2 {
        grid-template-columns: 1.5fr 1fr;
    }

    .element {
        font-size: 1rem;
        line-height: 2.2;
        font-weight: 400;
        text-align: justify;
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
        margin: 0.75rem auto;
        text-align: center;
        line-height: 2;
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

    @media (max-width: 1505px) {
        .about-container {
            width: 80%;
        }
    }

    @media (max-width: 1280px) {
        .description-container-1,
        .description-container-2 {
            gap: 60px;
        }

        .work1-img,
        .work2-img {
            width: 130%;
        }

        .element {
            font-size: 0.9rem;
            line-height: 2;
        }

        .img-container {
            height: 45vh;
            width: 45vh;
        }
    }

    @media (max-width: 1140px) {
        .about-container {
            width: 85%;
            gap: 80px;
        }

        .description {
            gap: 20px;
        }

        .description-container-1,
        .description-container-2 {
            gap: 40px;
        }
    }

    @media (max-width: 940px) {
        .about-container {
            width: 80%;
            gap: 20px;
        }

        .description-container-1,
        .description-container-2 {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }

    @media (max-width: 670px) {
    }
`;

export default Wrapper;
