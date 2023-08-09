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
`;

export default Wrapper;
