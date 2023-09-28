import styled from 'styled-components';

const Wrapper = styled.div`
    .slider-container {
        position: relative;
        width: 100%;
        height: 70vh;
        box-shadow: 2px 2px 10px 10px var(--primary-500);
        overflow: hidden;
    }

    .slider {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    .slide {
        flex: 0 0 100%;
        overflow: hidden;
    }

    .title-container {
        min-width: 100%;
        height: 100%;
        position: absolute;
        top: 0%;
        left: 0%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    h2,
    .title-span {
        font-size: 3.5rem;
        font-weight: 900;
        line-height: 2;
        color: var(--orange);
        letter-spacing: var(--letterSpacing);
        filter: drop-shadow(3px 3px var(--primary-500));
    }

    .title-span {
        padding: 0 0.5rem;
        font-size: 3.8rem;
        color: var(--pink);
        font-family: var(--secondary-fontFamily);
    }

    .title-part-1 {
        display: flex;
    }

    .dots {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        justify-content: center;
        z-index: 100;
    }

    .dot {
        width: 25px;
        height: 25px;
        border-radius: var(--circle);
        background-color: transparent;
        border: 2px solid var(--primary-500);
        cursor: pointer;
    }

    .dot.active {
        background: var(--orange);
        filter: drop-shadow(1px 1px var(--primary-500));
    }

    @media (max-width: 1300px) {
        .title-container h2 {
            font-size: 3rem;
        }
    }

    @media (max-width: 1170px) {
        .title-container h2 {
            line-height: 1.6;
            letter-spacing: 1px;
        }

        .title-container .title-span {
            font-weight: 500;
            font-size: 3.2rem;
        }
    }

    @media (max-width: 950px) {
        .title-container .title-span {
            font-weight: 500;
            font-size: 2.8rem;
        }

        .title-container h2 {
            width: 80%;
            text-align: center;
            font-size: 2.2rem;
            filter: drop-shadow(1px 1px var(--primary-500));
        }
    }

    @media (max-width: 515px) {
        .title-container h2 {
            font-size: 1.8rem;
        }

        .title-container .title-span {
            font-size: 2.4rem;
        }
    }

    @media (max-width: 395px) {
        .title-container h2 {
            font-size: 1.6rem;
        }

        .title-container .title-span {
            font-size: 2rem;
        }
    }
`;

export default Wrapper;
