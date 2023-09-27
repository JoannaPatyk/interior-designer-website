import styled from 'styled-components';

const Wrapper = styled.div`
    .logo-container {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 4rem 0;
    }

    .logo-background-image {
        position: absolute;
        z-index: -10;
    }

    .logo {
        height: 45vh;
        margin: 2rem 0 1rem;
        border-radius: 50%;
        z-index: -1;
    }

    @media (max-width: 1100px) {
        .logo {
            height: 40vh;
        }
    }

    @media (max-width: 650px) {
        .logo {
            height: 35vh;
        }
    }

    @media (max-width: 480px) {
        .logo {
            height: 30vh;
        }
    }

    @media (max-width: 380px) {
        .logo {
            height: 25vh;
        }
    }
`;

export default Wrapper;
