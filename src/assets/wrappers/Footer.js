import styled from 'styled-components';

const Wrapper = styled.div`
    .footer-container {
        position: relative;
        height: 5vh;
        width: 100%;
        padding-right: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--primary-300);
        box-shadow: 1px 1px 10px var(--primary-300);
    }

    p {
        margin: 0 auto;
        color: var(--white);
        font-size: 0.9rem;
    }

    small {
        font-size: 0.7rem;
        font-weight: 500;
    }
`;

export default Wrapper;
