import styled from 'styled-components';

const Wrapper = styled.div`
    .main-container {
        position: relative;
        height: 65vh;
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

    .title {
        padding: 0.25rem;
        line-height: 3.8rem;
        font-weight: 700;
        font-size: 3rem;
        color: var(--black);
        text-align: left;
        letter-spacing: var(--letterSpacing);
        font-family: var(--secondary-fontFamily);
        background: var(--gradient);
    }

    .title-container h2 {
        font-size: 2rem;
        font-weight: 400;
        line-height: 2;
        letter-spacing: 0.15rem;
        font-family: var(--primary-fontFamily);
        text-align: left;
        text-transform: none;
    }

    .title-container {
        width: 50%;
        height: 100%;
        padding-left: 8rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 30px;
        flex-direction: column;
    }

    .line {
        margin-top: 1rem;
        width: 400px;
        height: 3px;
        background: var(--gradient);
    }
`;

export default Wrapper;
