import styled from 'styled-components';

const Wrapper = styled.div`
    .main-container {
        position: relative;
        box-shadow: 2px 2px 10px 5px var(--black);
    }

    .title-container {
        width: 70%;
        min-height: 70vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .slide-1 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

    .main-title {
        width: 50%;
        height: 70vh;
        position: absolute;
        top: -2%;
        left: 5%;
        z-index: 10;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .title-container .title {
        padding: 0 0.5rem;
        font-weight: 900;
        font-size: 2.8rem;
        color: var(--black);
        text-align: left;
        letter-spacing: var(--letterSpacing);
        font-family: var(--secondary-fontFamily);
        background: var(--gradient);
    }

    .title-container h2 {
        font-size: 2.2rem;
        font-weight: 600;
        line-height: 2;
        letter-spacing: 2px;
        color: var(--white);
        font-family: var(--primary-fontFamily);
        text-align: left;
    }

    .btn-contact {
        margin-top: 2rem;
    }

    @media (max-width: 1300px) {
        .title-container h2 {
            font-size: 2rem;
        }
    }

    @media (max-width: 1210px) {
        .title-container h2 {
            font-size: 1.8rem;
        }
    }

    @media (max-width: 1170px) {
        .title-container h2 {
            line-height: 1.6;
            letter-spacing: 1px;
        }

        .title-container .title {
            font-weight: 500;
            font-size: 2.2rem;
        }
    }

    @media (max-width: 980px) {
        .main-title {
            width: 90%;
        }
    }

    @media (max-width: 800px) {
        .main-title {
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            align-items: center;
        }

        .title-container .title {
            text-align: center;
            font-size: 2.4rem;
        }

        .title-container h2 {
            text-align: center;
            font-size: 2.2rem;
        }
    }

    @media (max-width: 690px) {
        .title-container h2 {
            font-size: 2rem;
        }

        .title-container .title {
            font-size: 2.2rem;
        }

        .btn {
            width: 45%;
        }
    }

    @media (max-width: 625px) {
        .title-container {
            min-height: 50vh;
        }

        .slide-1 {
            height: 50vh;
        }

        .main-title {
            height: 50vh;
        }

        .title-container h2 {
            font-size: 1.6rem;
        }

        .title-container .title {
            font-size: 1.8rem;
        }

        .btn {
            margin: 2rem auto;
        }
    }

    @media (max-width: 515px) {
        .title-container h2 {
            font-size: 1.4rem;
        }

        .title-container .title {
            font-size: 1.6rem;
        }

        .btn {
            width: 50%;
        }
    }

    @media (max-width: 475px) {
        .title-container {
            min-height: 40vh;
        }

        .slide-1 {
            height: 40vh;
        }

        .main-title {
            height: 40vh;
        }

        .title-container h2 {
            font-size: 1.2rem;
            font-weight: 500;
        }
    }

    @media (max-width: 435px) {
        .title-container h2 {
            font-size: 1rem;
        }

        .title-container .title {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 395px) {
        .main-title {
            width: 95%;
        }

        .title-container h2 {
            font-size: 0.95rem;
        }

        .title-container .title {
            font-size: 1.2rem;
        }
    }
`;

export default Wrapper;
