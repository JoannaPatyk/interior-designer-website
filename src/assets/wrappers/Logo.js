import styled from 'styled-components';

const Wrapper = styled.div`
    .logo-container {
        min-height: 20vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 35vh;
        margin: 2rem 0 1rem;
        z-index: -1;
    }

    @media (max-width: 650px) {
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
