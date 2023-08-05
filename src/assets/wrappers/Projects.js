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
    }

    .project {
        position: relative;
    }

    .project img {
        width: 80%;
        filter: blur(1px);
        transition: var(--transition);
        cursor: pointer;
    }

    .project img:hover {
        transform: scale(1.05);
        filter: blur(0);
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
        width: 350px;
        height: 350px;
        background-color: var(--primary-100);
    }

    .circle-3 {
        bottom: -10%;
        right: 0;
        width: 180px;
        height: 180px;
        background-color: var(--primary-400);
    }

    .circle-4 {
        top: 10%;
        left: -35%;
        width: 120px;
        height: 120px;
        background-color: var(--primary-300);
    }
    .circle-5 {
        top: 30%;
        right: 5%;
        width: 200px;
        height: 200px;
        background-color: var(--primary-100);
    }
`;

export default Wrapper;
