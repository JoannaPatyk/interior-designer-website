import styled from 'styled-components';

const Wrapper = styled.div`
    .details-container {
        min-height: 5vh;
        width: 100%;
        display: grid;
        gap: 10px;
        place-content: center;
        grid-template-columns: 0.05fr 0.95fr;
        padding: 0 3rem;
        background-color: var(--primary-300);
        box-shadow: 1px 1px 10px var(--black);
    }

    .details-container p {
        color: var(--white);
        font-weight: 200;
    }

    .data-container {
        display: flex;
        gap: 20px;
        justify-content: flex-end;
        filter: drop-shadow(2px 2px var(--primary-500));
        margin: 0.5rem 0;
        cursor: pointer;

        .icon {
            color: var(--orange);
            font-size: 2.2rem;
        }
    }

    .detail-element {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;
    }

    .media-container {
        height: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;

        a {
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
        }
    }

    .media-icon {
        width: 30px;
        font-size: 3.5rem;
        color: var(--orange);
        transition: var(--transition);
        cursor: pointer;
        filter: drop-shadow(2px 2px var(--primary-500));
    }

    .media-icon:hover {
        color: var(--primary-500);
        filter: drop-shadow(2px 2px var(--white));
    }

    @media (max-width: 1250px) {
        .details-container p {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1195px) {
        .details-container {
            padding: 0 1.5rem;
        }

        .data-container {
            gap: 5px;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
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
            font-size: 0.7rem;
        }

        .media-icon {
            width: 25px;
        }
    }
`;

export default Wrapper;
