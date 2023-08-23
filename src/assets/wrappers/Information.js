import styled from 'styled-components';

const Wrapper = styled.div`
    .information-container {
        width: 90%;
        height: 90vh;
        margin: 5vh auto 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .advantages-container {
        width: 90%;
        height: 70vh;
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
    }

    .advantage {
        width: 20%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
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
        background: var(--gradient);
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
        line-height: 1.8;
        text-align: justify;
        letter-spacing: calc(var(--letterSpacing) / 1.5);
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

        .btn {
            width: 45%;
            font-size: 1rem;
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
            height: 60vh;
        }

        .advantage h2 {
            margin: 0.8rem;
        }

        .advantage p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1080px) {
        .information-container {
            height: 130vh;
        }

        .advantages-container {
            height: 130vh;
        }

        .advantages-title {
            margin-top: 2rem;
            font-size: 0.9rem;
        }

        .line {
            width: 5rem;
        }

        .advantages-elements {
            width: 100%;
            height: 150vh;
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .advantage {
            width: 80%;
            height: 35vh;
            margin: 0;
        }

        .advantage-icon {
            margin: 0;
        }

        .btn {
            width: 70%;
            margin: 1rem 0;
        }
    }

    @media (max-width: 770px) {
        .information-container {
            height: 140vh;
        }

        .advantages-container {
            height: 140vh;
        }

        .advantage-icon {
            width: 60px;
            height: 60px;
            padding: 1rem;
        }

        .btn {
            width: 80%;
        }
    }

    @media (max-width: 680px) {
        .advantages-title {
            margin-top: 2rem;
            font-size: 0.8rem;
        }

        .advantage {
            width: 90%;
        }

        .advantage h2 {
            font-size: 1.2rem;
        }

        .advantage p {
            font-size: 0.8rem;
        }

        .btn {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 480px) {
        .advantage {
            width: 95%;
        }

        .advantage-icon {
            width: 50px;
            height: 50px;
            padding: 1rem;
        }

        .advantage h2 {
            font-size: 1.1rem;
        }

        .advantage p {
            font-size: 0.75rem;
        }
    }
`;

export default Wrapper;
