import styled from 'styled-components';

const Wrapper = styled.div`
    .information-container {
        width: 90%;
        margin: 10rem auto 6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .advantages-container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .advantages-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .advantages-title h1 {
        text-align: right;
        text-transform: uppercase;
        padding-top: 1rem;
    }

    .advantages-elements {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 120px;
        margin: 4rem 1rem;
    }

    .advantage {
        width: 20%;
        display: grid;
        gap: 20px;
        place-items: center;
        grid-template-rows: 1fr 0.5fr 2.5fr;
        transition: var(--transition);
    }

    .advantage:hover {
        transform: scale(1.05);
    }

    .advantage-icon {
        width: 100px;
        height: 100px;
        padding: 1rem;
        margin: 1rem;
        color: var(--white);
        background-color: var(--primary-300);
        border-radius: 50%;
    }

    .advantage h2 {
        margin: 1rem;
        text-align: center;
        letter-spacing: var(--letterSpacing);
        font-family: var(--secondary-fontFamily);
        text-transform: uppercase;
    }

    .advantage p {
        line-height: 2;
        text-align: justify;
        letter-spacing: calc(var(--letterSpacing) / 1.5);
    }

    .projects-btn {
        font-size: 0.9rem;
    }

    @media (max-width: 1850px) {
        .advantages-elements {
            gap: 100px;
        }

        .advantage {
            margin: 1rem;
            width: 40%;
        }

        .advantage-icon {
            width: 80px;
            height: 80px;
        }

        .projects-btn {
            width: 45%;
        }
    }

    @media (max-width: 1530px) {
        .advantages-elements {
            gap: 50px;
        }

        .advantage {
            width: 45%;
        }
    }

    @media (max-width: 1380px) {
        .advantages-elements {
            gap: 30px;
        }

        .advantage {
            width: 50%;
        }

        .advantage h2 {
            margin: 0.8rem;
            font-size: 1.4rem;
        }

        .advantage p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1080px) {
        .advantages-title {
            margin-top: 2rem;
            font-size: 0.9rem;
        }

        .line {
            width: 5rem;
        }

        .advantages-elements {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .advantage {
            width: 80%;
            margin: 1rem;
            grid-template-rows: 1fr 0.5fr 1.5fr;
        }

        .advantage-icon {
            margin: 0;
        }

        .projects-btn {
            width: 70%;
            margin: 1rem 0;
        }
    }

    @media (max-width: 770px) {
        .advantage-icon {
            padding: 1rem;
        }

        .btn {
            width: 80%;
        }
    }

    @media (max-width: 680px) {
        .advantages-elements {
            margin: 0.5rem;
        }

        .advantage-icon {
            width: 70px;
            height: 70px;
        }

        .advantages-title {
            margin-top: 2rem;
            font-size: 0.8rem;
        }

        .advantage {
            width: 90%;
            grid-template-rows: 0.5fr 0.25fr 1.25fr;
        }

        .advantage h2 {
            font-size: 1.2rem;
        }

        .advantage p {
            font-size: 0.8rem;
        }

        .projects-btn {
            font-size: 0.8rem;
            line-height: 1.6;
        }
    }

    @media (max-width: 480px) {
        .advantage {
            width: 95%;
        }

        .advantage h2 {
            font-size: 1.1rem;
        }

        .advantage p {
            font-size: 0.75rem;
        }
    }

    @media (max-width: 400px) {
        .advantages-title {
            font-size: 0.7rem;
        }
    }
`;

export default Wrapper;
