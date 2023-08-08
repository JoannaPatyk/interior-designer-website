import styled from 'styled-components';

const Wrapper = styled.div`
    .services-container {
        height: 260vh;
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 70px;
    }

    .services-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .title {
        text-transform: uppercase;
        text-align: right;
        margin: 2rem 0;
    }

    .services-description {
        width: 75%;
        text-align: center;
        font-weight: 300;
        line-height: 2;
    }

    .service {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 50px;
        margin: 1rem 0;
    }

    .service-2,
    .service-4 {
        text-align: right;
    }

    .img-bg-container {
        position: relative;
    }

    .img-container {
        height: 45vh;
        width: 45vh;
        border-radius: 50%;
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
        background: var(--primary-100);
    }

    .circle-3 {
        bottom: -20%;
        left: -20%;
        width: 280px;
        height: 280px;
        background-color: var(--primary-400);
    }

    .circle-4 {
        bottom: -5%;
        right: -10%;
        width: 180px;
        height: 180px;
        background-color: var(--primary-100);
    }

    .circle-5 {
        bottom: 10%;
        left: -5%;
        width: 90px;
        height: 90px;
        background-color: var(--primary-400);
    }

    .circle-6 {
        top: 10%;
        right: -25%;
        width: 190px;
        height: 190px;
        background-color: var(--primary-300);
    }

    .service-img {
        width: 150%;
    }

    .service-description {
        width: 70%;
        line-height: 2;
        text-align: justify;
    }

    .service-description h3 {
        font-size: 1.5rem;
        font-family: var(--secondary-fontFamily);
    }

    .services-description span {
        font-weight: 700;
        color: var(--primary-300);
    }
`;

export default Wrapper;
