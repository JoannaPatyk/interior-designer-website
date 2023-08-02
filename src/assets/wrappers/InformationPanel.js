import styled from 'styled-components';

const Wrapper = styled.div`
    .information-container {
        width: 90%;
        height: 90vh;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .advantages-container {
        width: 90%;
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 0 auto;
    }

    .advantages-title {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .line {
        width: 10rem;
        height: 3px;
        margin-right: -10px;
        background-color: var(--black);
        background: var(--gradient);
    }

    h1 {
        text-align: right;
        /* color: var(--primary-300); */
    }

    .advantages-elements {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 90px;
    }

    .advantage {
        width: 22%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 0;
        transition: var(--transition);
    }

    .advantage:hover {
        padding-top: 10px;
    }

    .advantage-icon {
        font-size: 4%.5;
        margin: 1rem;
    }

    h2 {
        margin: 1rem;
        text-align: center;
        letter-spacing: var(--letterSpacing);
        font-family: var(--secondary-fontFamily);
        text-transform: uppercase;
    }

    .advantage-icon p {
        line-height: 1.8;
        text-align: justify;
        letter-spacing: calc(var(--letterSpacing) / 1.5);
    }
`;

export default Wrapper;
