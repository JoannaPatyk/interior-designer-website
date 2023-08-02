import styled from 'styled-components';

const Wrapper = styled.div`
    .details-container {
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

    .details-container p {
        color: var(--white);
        font-weight: 300;
    }

    .detail-element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .icon {
        color: var(--white);
    }
`;

export default Wrapper;
