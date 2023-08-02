import styled from 'styled-components';

const Wrapper = styled.div`
    .footer-container {
        height: 5vh;
        width: 100%;
        padding-right: 2rem;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: flex-end;
        background-color: var(--primary-300);
        box-shadow: 1px 1px 10px var(--primary-300);
    }

    p {
        margin: 0 auto;
        color: var(--white);
        font-size: 0.9rem;
    }
`;

export default Wrapper;
