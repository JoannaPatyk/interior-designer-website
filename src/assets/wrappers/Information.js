import styled from 'styled-components';

const Wrapper = styled.div`
    .information-container {
        position: relative;
        width: 90%;
        margin: 12rem auto 5rem;
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
        text-align: center;
        font-weight: 600;
        line-height: 1.5;
        filter: drop-shadow(2px 2px var(--primary-200));
        text-transform: uppercase;
    }

    .advantages-elements {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 120px;
        margin: 5rem 1rem;
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
        background-color: var(--orange);
        border-radius: 50%;
        filter: drop-shadow(2px 2px var(--primary-500));
    }

    .advantage h2 {
        text-align: center;
        font-weight: 600;
        font-size: 2.2rem;
        color: var(--pink);
        letter-spacing: var(--letterSpacing);
        font-family: var(--secondary-fontFamily);
        filter: drop-shadow(2px 2px var(--primary-500));
    }

    .advantage p {
        line-height: 2;
        text-align: justify;
        letter-spacing: 1px;
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
            font-size: 2rem;
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
        .information-container {
            margin: 8rem auto 5rem;
        }

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
            font-size: 1.8rem;
        }

        .advantage p {
            font-size: 0.8rem;
        }

        .projects-btn {
            font-size: 0.8rem;
            line-height: 1.6;
        }
    }

    @media (max-width: 600px) {
        .line {
            display: none;
        }
    }

    @media (max-width: 480px) {
        .advantage {
            width: 95%;
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
