import styled from 'styled-components';

const Wrapper = styled.div`
    .main-container {
        position: relative;
        height: 65vh;
    }

    .title-container {
        width: 50%;
        height: 70vh;
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
        top: 0;
        left: 10%;
        z-index: 10;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .title-container .title {
        font-weight: 700;
        font-size: 2.5rem;
        color: var(--black);
        text-align: left;
        letter-spacing: var(--letterSpacing);
        font-family: var(--secondary-fontFamily);
        background: var(--gradient);
    }

    .title-container h2 {
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.8;
        letter-spacing: 0.15rem;
        font-family: var(--primary-fontFamily);
        text-align: left;
    }

    .btn-contact {
        margin-top: 2rem;
    }

    .line {
        width: 60%;
        margin-top: 1rem;
    }

    @media (max-width: 1060px) {
        .title-container h2 {
            font-size: 1.3rem;
            line-height: 1.6;
            letter-spacing: 0.1rem;
        }

        .title-container .title {
            font-weight: 500;
            font-size: 2.2rem;
        }
    }

    @media (max-width: 890px) {
        .main-title {
            width: 80%;
        }
    }

    @media (max-width: 620px) {
        .title-container h2 {
            font-size: 1.2rem;
        }

        .title-container .title {
            font-size: 2rem;
        }

        .btn {
            width: 40%;
        }
    }

    @media (max-width: 515px) {
        .title-container h2 {
            font-size: 1rem;
            text-align: center;
        }

        .title-container .title {
            font-size: 1.5rem;
        }

        .line {
            width: 0;
            margin: 0;
        }

        .btn {
            margin: 2rem auto;
        }
    }

    @media (max-width: 450px) {
        .btn {
            width: 50%;
        }
    }
`;

export default Wrapper;
