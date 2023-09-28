import styled from 'styled-components';

const Wrapper = styled.div`
    .services-container {
        width: 80%;
        margin: 5rem auto 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 120px;
    }

    .services-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .title {
        text-transform: uppercase;
        text-align: center;
        font-weight: 900;
        line-height: 1.5;
        filter: drop-shadow(2px 2px var(--primary-200));
    }

    .services-description {
        width: 75%;
        text-align: center;
        font-weight: 400;
        font-size: 1.8rem;
        line-height: 2.2;
        margin-top: 2rem;

        span {
            font-weight: 900;
            font-size: 2rem;
        }
    }

    .service {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 50px;
        margin: 0.5rem 0;
    }

    .service-2,
    .service-4 {
        text-align: right;
    }

    .img-bg-container {
        position: relative;
    }

    .img-container {
        margin: 0 auto;
        width: 80%;
        height: 30vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .circle {
        position: absolute;
        z-index: -10;
        border-radius: 50%;
    }

    .circle-1 {
        top: -15%;
        left: -5%;
        width: 150px;
        height: 150px;
        background-color: var(--primary-300);
    }

    .circle-2 {
        bottom: -20%;
        right: -20%;
        width: 300px;
        height: 300px;
        background: var(--pink);
    }

    .circle-3 {
        bottom: -20%;
        left: -20%;
        width: 280px;
        height: 280px;
        background-color: var(--orange);
    }

    .circle-4 {
        bottom: 10%;
        right: 0%;
        width: 180px;
        height: 180px;
        background-color: var(--green);
    }

    .circle-5 {
        bottom: 10%;
        left: 0%;
        width: 90px;
        height: 90px;
        background-color: var(--red);
    }

    .circle-6 {
        top: 10%;
        right: -10%;
        width: 190px;
        height: 190px;
        background-color: var(--primary-300);
    }

    .service-img {
        width: 300%;
    }

    .service-description {
        width: 90%;
        line-height: 2;
        text-align: justify;
    }

    .service-description p {
        font-size: 1.2rem;
        letter-spacing: 1px;
    }

    .service-description h3 {
        width: 80%;
        margin: 1rem auto;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.5;
        font-family: var(--secondary-fontFamily);
    }

    .services-description span {
        font-weight: 700;
        color: var(--orange);
        font-family: var(--secondary-fontFamily);
        filter: drop-shadow(2px 2px var(--primary-500));
    }

    .btn {
        width: 30vw;
    }

    @media (max-width: 1400px) {
        .services-container {
            width: 90%;
            gap: 100px;
        }

        .service {
            gap: 20px;
        }

        .services-description {
            width: 80%;
            font-size: 1.8rem;

            span {
                font-size: 2.2rem;
            }
        }

        .service-description h3 {
            font-size: 1.2rem;
        }

        .service-description p {
            font-size: 1rem;
        }

        .service-img {
            width: 180%;
            padding: 1.5rem;
        }
    }

    @media (max-width: 1200px) {
        .service {
            width: 90%;
        }

        .services-description {
            font-size: 1.6rem;

            span {
                font-size: 1.8rem;
            }
        }

        .btn {
            width: 35vw;
        }
    }

    @media (max-width: 1080px) {
        .title {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 945px) {
        .services-container {
            margin: 5rem auto;
            gap: 80px;
        }

        .service {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 20px;
            margin: 1rem 0;
        }

        .services-description span {
            filter: drop-shadow(1px 1px var(--primary-500));
        }

        .btn {
            width: 40vw;
        }
    }

    @media (max-width: 900px) {
        .img-container {
            height: 28vh;
        }
    }

    @media (max-width: 820px) {
        .btn {
            width: 50vw;
        }
    }

    @media (max-width: 680px) {
        .title {
            font-size: 1.6rem;
        }

        .btn {
            width: 60vw;
        }
    }

    @media (max-width: 600px) {
        .line {
            display: none;
        }

        .services-description {
            font-size: 1.4rem;

            span {
                font-size: 1.6rem;
            }
        }
    }

    @media (max-width: 520px) {
        .line {
            display: none;
        }

        .services-description {
            font-size: 1.2rem;

            span {
                font-size: 1.4rem;
            }
        }

        .btn {
            width: 70vw;
        }
    }

    @media (max-width: 520px) {
        .services-description {
            margin: 0;
        }

        .btn {
            width: 80vw;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 400px) {
        .title {
            font-size: 1.4rem;
        }

        .services-description {
            font-size: 1rem;

            span {
                font-size: 1.2rem;
            }
        }

        .btn {
            font-size: 0.7rem;
        }
    }
`;

export default Wrapper;
