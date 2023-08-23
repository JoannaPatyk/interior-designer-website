import styled from 'styled-components';

const Wrapper = styled.div`
    .logo-container {
        height: 20vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo {
        height: 18vh;
        margin: 2rem 0;
    }

    @media (max-width: 650px) {
        .logo {
            height: 16vh;
        }
    }
`;

export default Wrapper;
