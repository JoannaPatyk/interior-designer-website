import styled from 'styled-components';

const Wrapper = styled.div`
    .projects-container {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 60px;
        margin: 10rem auto;
    }

    .slide-1 {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }

    .project-title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
    }

    .project-title h1 {
        text-transform: uppercase;
        text-align: center;
    }

    .projects {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 60px;
    }

    .project {
        display: flex;
        flex-direction: column;
        transition: var(--transition);
        cursor: pointer;
    }

    .title {
        margin: 2rem 0;
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
        font-family: var(--secondary-fontFamily);
    }

    .description {
        margin: 0 0 2rem;
        letter-spacing: 1px;
        line-height: 2;
        text-align: justify;
    }

    @media (max-width: 800px) {
        .title {
            font-size: 2rem;
        }

        .description {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 600px) {
        .projects-container {
            margin: 8rem auto 6rem;
        }

        .projects {
            gap: 40px;
        }

        .line {
            display: none;
        }
    }

    @media (max-width: 500px) {
        .slide-1 {
            height: 40vh;
            object-fit: cover;
        }

        .description {
            font-size: 0.8rem;
        }
    }
`;

export default Wrapper;
