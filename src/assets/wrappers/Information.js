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
`;

export default Wrapper;
