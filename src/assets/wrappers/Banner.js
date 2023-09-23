import styled from 'styled-components';

const Wrapper = styled.div`
    .banner-container {
        min-height: 12vh;
        padding: 1rem 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url('https://cdn.pixabay.com/photo/2016/07/08/13/37/texture-1504364_1280.jpg');
        box-shadow: 2px 2px 10px 5px var(--black);

        p {
            color: var(--orange);
            text-align: center;
            line-height: 1.8;
            font-weight: 800;
            font-size: 2.3rem;
            filter: drop-shadow(3px 3px var(--primary-500));
            letter-spacing: 2px;
            text-transform: uppercase;
        }
    }

    @media (max-width: 1650px) {
        .banner-container {
            padding: 1rem 2rem;

            p {
                font-size: 2rem;
                filter: drop-shadow(2px 2px var(--primary-500));
            }
        }
    }

    @media (max-width: 1435px) {
        .banner-container {
            p {
                font-size: 1.8rem;
                filter: drop-shadow(2px 2px var(--primary-500));
            }
        }
    }

    @media (max-width: 1345px) {
        .banner-container {
            p {
                font-size: 1.6rem;
                filter: drop-shadow(2px 2px var(--primary-500));
            }
        }
    }

    @media (max-width: 1150px) {
        .banner-container {
            p {
                font-size: 1.4rem;
            }
        }
    }

    @media (max-width: 985px) {
        .banner-container {
            p {
                font-size: 1.2rem;
                filter: drop-shadow(1px 1px var(--primary-500));
            }
        }
    }

    @media (max-width: 580px) {
        .banner-container {
            padding: 0 0.5rem;
        }
    }

    @media (max-width: 460px) {
        .banner-container {
            p {
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 360px) {
        .banner-container {
            padding: 0.2rem;
        }
    }
`;

export default Wrapper;
