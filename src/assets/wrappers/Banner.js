import styled from 'styled-components';

const Wrapper = styled.div`
    .banner-container {
        min-height: 7vh;
        padding: 1rem 6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-400);

        p {
            color: var(--white);
            text-align: center;
            line-height: 1.8;
            font-weight: 600;
            filter: drop-shadow(2px 2px var(--black));
        }

        span {
            font-weight: 600;
        }
    }

    @media (max-width: 1405px) {
        .banner-container {
            padding: 1rem 2rem;
        }
    }

    @media (max-width: 1345px) {
        .banner-container {
            p {
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 1130px) {
        .banner-container {
            p {
                font-size: 0.7rem;
            }
        }
    }

    @media (max-width: 580px) {
        .banner-container {
            min-height: 14vh;
            padding: 0 1rem;
        }
    }

    @media (max-width: 350px) {
        .banner-container {
            min-height: 14vh;
            padding: 0.5rem;
        }
    }
`;

export default Wrapper;
