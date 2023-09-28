import styled from 'styled-components';

const Wrapper = styled.div`
    .banner-container {
        margin: 0 10rem;
        display: grid;
        grid-template-columns: 0.1fr 10.9fr;
        place-items: center;
    }

    .container {
        position: relative;
        min-height: 15vh;
        padding: 2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            color: var(--pink);
            text-align: center;
            line-height: 1.8;
            font-weight: 900;
            font-size: 2rem;
            filter: drop-shadow(2px 2px var(--primary-500));
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    }

    .contact-icon {
        margin-left: -13rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        color: transparent;
        font-size: 2.5rem;
        border-radius: 50%;
        transition: var(--transition);
        cursor: pointer;
    }

    .media-link:hover {
        transform: scale(0.9);
    }

    @media (max-width: 1650px) {
        .container {
            padding: 1rem 2rem;

            p {
                filter: drop-shadow(2px 2px var(--primary-500));
            }
        }
    }

    @media (max-width: 1500px) {
        .media-link {
            width: 50px;
            height: 50px;

            .media-icon {
                font-size: 2.2rem;
            }
        }
    }

    @media (max-width: 1345px) {
        .container {
            p {
                font-size: 1.6rem;
                filter: drop-shadow(2px 2px var(--primary-500));
            }
        }
    }

    @media (max-width: 1150px) {
        .container {
            p {
                font-size: 1.4rem;
            }
        }

        .contact-icon {
            margin-left: -10rem;
        }
    }

    @media (max-width: 985px) {
        .container {
            p {
                font-size: 1.2rem;
                filter: drop-shadow(1px 1px var(--primary-500));
            }
        }

        .banner-container {
            margin: 0 6rem;
        }

        .contact-icon {
            margin-left: -8rem;
        }
    }

    @media (max-width: 900px) {
        .container,
        .contact-icon {
            display: none;
        }
    }
`;

export default Wrapper;
