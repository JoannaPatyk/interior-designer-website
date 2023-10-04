import styled from 'styled-components';

const Wrapper = styled.div`
    .details-container {
        min-height: 6vh;
        width: 100%;
        display: grid;
        gap: 5px;
        place-content: center;
        grid-template-columns: 0.1fr 0.9fr;
        padding: 0 1.5rem;
        background-color: var(--primary-500);
        box-shadow: 2px 2px 10px 5px var(--primary-500);
        overflow: hidden;
    }

    .details-container p {
        color: var(--white);
        font-weight: 600;
    }

    .data-container {
        display: flex;
        gap: 15px;
        justify-content: flex-end;
        filter: drop-shadow(2px 2px var(--primary-500));
        margin: 0.5rem 0;
        cursor: pointer;
    }

    .detail-element {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 10px;

        .icon {
            font-size: 2.5rem;
        }

        .phone-icon {
            color: var(--red);
        }

        .email-icon {
            color: var(--green);
        }
    }

    .media-container {
        height: 100%;
        display: flex;
        gap: 20px;
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
        font-size: 2.5rem;
        transition: var(--transition);
        cursor: pointer;
    }

    .media-icon:hover {
        color: var(--white);
    }

    .facebook {
        color: var(--blue);
    }

    .instagram {
        color: var(--pink);
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

    @media (max-width: 675px) {
        .details-container {
            padding: 0 0.5rem;
        }
        .data-container {
            gap: 0;

            .icon {
                font-size: 1.5rem;
            }
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

    @media (max-width: 370px) {
        .media-icon {
            display: none;
        }
    }
`;

export default Wrapper;
