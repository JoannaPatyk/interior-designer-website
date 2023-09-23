import styled from 'styled-components';

const Wrapper = styled.div`
    .main-container {
        .form-container {
            display: grid;
            place-items: center;
            grid-template-columns: 2fr 1fr;
            background-image: url('https://cdn.pixabay.com/photo/2016/07/08/13/37/texture-1504364_1280.jpg');
            box-shadow: 2px 2px 10px 5px var(--black);

            h4 {
                width: 70%;
                font-size: 3.5rem;
                font-weight: 900;
                text-align: center;
                line-height: 1.8;
                color: var(--orange);
                letter-spacing: 1px;
                filter: drop-shadow(4px 4px var(--black));
                text-transform: uppercase;
            }
        }

        .contact-wrapper {
            justify-content: left;
        }

        .contact-form {
            width: 80%;
            align-items: left;
            background-color: var(--primary-100);
            padding: 2rem 0;
        }
    }

    @media (max-width: 1610px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 3rem;
                }

                h3 {
                    font-size: 1rem;
                    letter-spacing: 1px;
                }

                .name,
                .email,
                .message {
                    width: 30vw;
                }

                .form-control {
                    width: 30vw;
                }
            }
        }
    }

    @media (max-width: 1380px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 2.5rem;
                    filter: drop-shadow(2px 2px var(--black));
                }
            }

            .contact-form {
                width: 90%;
            }
        }
    }

    @media (max-width: 1180px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 2.2rem;
                }
            }
        }
    }

    @media (max-width: 1045px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 2rem;
                }
            }
        }
    }

    @media (max-width: 950px) {
        .main-container {
            .form-container {
                display: flex;
                flex-direction: column;

                h4 {
                    width: 85%;
                    margin-top: 3rem;
                }

                h3 {
                    line-height: 1.8;
                }
            }

            .contact-wrapper {
                width: 60vw;
            }

            .contact-form {
                width: 100%;
                margin: 3rem 0;

                .btn {
                    margin-top: 2rem;
                }

                .name,
                .email,
                .message {
                    width: 45vw;
                }

                .form-control {
                    width: 45vw;
                }
            }
        }
    }

    @media (max-width: 750px) {
        .main-container {
            .contact-wrapper {
                width: 70vw;
            }
        }
    }

    @media (max-width: 650px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 1.8rem;
                }
            }
        }
    }

    @media (max-width: 480px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 1.6rem;
                }

                h3 {
                    width: 60vw;
                }
            }

            .contact-wrapper {
                width: 80vw;
            }

            .contact-form {
                .name,
                .email,
                .message {
                    width: 60vw;
                }

                .form-control {
                    width: 60vw;
                }
            }
        }
    }

    @media (max-width: 370px) {
        .main-container {
            .form-container {
                h4 {
                    font-size: 1.4rem;
                }
            }
        }
    }
`;

export default Wrapper;
