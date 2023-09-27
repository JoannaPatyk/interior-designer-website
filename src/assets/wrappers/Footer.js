import styled from 'styled-components';

const Wrapper = styled.div`
    .footer-container {
        position: relative;
        min-height: 30vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--primary-500);
        box-shadow: 1px 1px 10px var(--primary-300);
    }

    h2 {
        padding: 1rem 0;
    }

    p {
        margin: 0 auto;
        color: var(--white);
        font-size: 0.9rem;
        padding: 0.4rem 0;
    }

    small {
        font-size: 0.7rem;
        font-weight: 500;
    }

    .footer-line {
        width: 40%;
        margin: 0 auto;
        height: 3px;
        border: 0;
        background: var(--gradient);
    }

    .footer-text {
        width: 60%;
        display: grid;
        gap: 40px;
        grid-template-columns: 0.5fr 0.5fr 0.5fr;
        margin: 0 auto;
        padding: 2rem 0;

        .footer-text-element {
            width: 100%;
            display: flex;
            flex-direction: column;

            h2 {
                color: var(--orange);
                font-size: 1.2rem;
                font-weight: 500;
                letter-spacing: 1px;
                text-align: center;
            }

            h2:nth-child(1) {
                color: var(--white);
                font-weight: 900;
                letter-spacing: 1px;
                text-transform: uppercase;
            }

            h3 {
                color: var(--white);
                font-weight: 300;
                font-size: 0.8rem;
                text-align: center;
                padding: 0.5rem 0;
            }

            p {
                text-align: center;
            }

            .media-container {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .media-icon {
                width: 100%;
                font-size: 3rem;
                margin: 0.5rem 0;
                transition: var(--transition);
                cursor: pointer;
            }

            .facebook {
                color: var(--blue);
            }

            .instagram {
                color: var(--pink);
            }

            .media-icon:hover {
                color: var(--white);
            }
        }
    }

    .copyright {
        margin: 1rem 0;
    }

    @media (max-width: 1380px) {
        .footer-text {
            width: 70%;
            gap: 20px;
        }
    }

    @media (max-width: 1150px) {
        .footer-text {
            width: 80%;

            .footer-text-element {
                h2 {
                    font-size: 1rem;
                }

                h3 {
                    font-size: 0.7rem;
                }

                p {
                    font-size: 0.8rem;
                }
            }
        }
    }

    @media (max-width: 910px) {
        .footer-text {
            .footer-text-element {
                h3 {
                    font-size: 0.6rem;
                }

                p {
                    font-size: 0.7rem;
                }

                .media-icon {
                    font-size: 2rem;
                }
            }
        }
    }

    @media (max-width: 770px) {
        .footer-text {
            display: flex;
            flex-direction: column;
            padding: 3rem 0 2rem;
        }
    }
`;

export default Wrapper;
