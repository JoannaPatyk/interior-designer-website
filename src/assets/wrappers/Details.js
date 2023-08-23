import styled from 'styled-components';

const Wrapper = styled.div`
    .details-container {
        height: 6vh;
        width: 100%;
        padding-right: 30px;
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
        left: 80px;
    }

    .instagram {
        left: 30px;
    }

    @media (max-width: 1250px) {
        .details-container p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 615px) {
        .details-container {
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            gap: 5px;
        }

        .details-container p {
            font-size: 0.75rem;
        }

        .media-icon {
            width: 25px;
        }

        .facebook {
            left: 65px;
        }
    }
`;

export default Wrapper;
