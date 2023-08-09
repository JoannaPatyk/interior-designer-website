import styled from 'styled-components';

const Wrapper = styled.div`
    .projects-container {
        height: 89vh;
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin: 0 auto;
    }

    .menu-icon {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: calc(6vh / 2);
        transform: translateY(-50%);
        left: 1.9%;
        z-index: 100;
        color: var(--white);
        font-size: 1.5rem;
        cursor: pointer;
    }

    .menu-box {
        position: absolute;
        top: -100%;
        transform: translateY(-50%);
        left: 5%;
        z-index: 100;
        transition: 1s;
    }

    .menu-open {
        top: calc(6vh / 2);
    }

    .project-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .project-title h1 {
        text-transform: uppercase;
    }

    .projects {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 60px;
    }

    .project {
        position: relative;
        width: 400px;
        transition: var(--transition);
        cursor: pointer;
    }

    .title {
        margin-top: 1rem;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        font-family: var(--secondary-fontFamily);
    }

    .circle {
        position: absolute;
        z-index: -10;
        border-radius: 50%;
    }
`;

export default Wrapper;
