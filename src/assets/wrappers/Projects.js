import styled from 'styled-components';

const Wrapper = styled.div`
    .projects-container {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 100px;
        margin: 10rem auto;
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
        gap: 100px;
    }

    .project {
        grid-template-rows: 3fr 0.5fr 2fr;
        position: relative;
        width: 400px;
        transition: var(--transition);
        cursor: pointer;
    }

    .title {
        margin: 2rem 0;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        font-family: var(--secondary-fontFamily);
    }

    .description {
        margin: 2rem 0;
        letter-spacing: 1px;
        line-height: 2;
        text-align: justify;
    }
`;

export default Wrapper;
