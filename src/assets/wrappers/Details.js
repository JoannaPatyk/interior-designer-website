import styled from 'styled-components';

const Wrapper = styled.div`
    .details-container {
        height: 6vh;
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
        color: var(--black);
        font-weight: 400;
    }

    .detail-element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .icon {
        color: var(--black);
    }

    .media-icon {
        width: 30px;
        position: absolute;
        top: calc(6vh / 2);
        transform: translateY(-50%);
        transition: var(--transition);
    }

    .media-icon:hover {
        transform: translateY(-50%) scale(0.95);
    }

    .facebook {
        right: 480px;
    }

    .instagram {
        right: 530px;
    }
`;

export default Wrapper;
