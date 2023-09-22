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
        height: 40vh;
        margin: 2rem 0 1rem;
        z-index: -1;
    }

    @media (max-width: 650px) {
        .logo {
            height: 16vh;
        }
    }

    @media (max-width: 380px) {
        .logo {
            height: 13vh;
        }
    }
`;

export default Wrapper;
