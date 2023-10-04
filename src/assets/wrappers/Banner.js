import styled from 'styled-components';

const Wrapper = styled.div`
    .banner-container {
        margin: 1rem auto;
        display: grid;
        grid-template-columns: 0.1fr 10.9fr;
        place-items: center;
        background-color: var(--primary-500);
        box-shadow: 2px 2px 10px 5px var(--primary-500);
        overflow: hidden;
    }

    .container {
        position: relative;
        min-height: 12vh;
        padding: 2rem 0;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            color: var(--white);
            text-align: center;
            line-height: 1.6;
            font-weight: 900;
            font-size: 1.8rem;
            filter: drop-shadow(2px 2px var(--red));
            letter-spacing: 3px;
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

        .contact-icon {
            margin-left: -8rem;
        }
    }

    @media (max-width: 500px) {
        .container {
            p {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 400px) {
        .container {
            p {
                font-size: 0.9rem;
            }
        }
    }
`;

export default Wrapper;
