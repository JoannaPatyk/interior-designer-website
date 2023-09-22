import styled from 'styled-components';

const Wrapper = styled.div`
    .footer-container {
        position: relative;
        height: 40vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: var(--primary-500);
        box-shadow: 1px 1px 10px var(--primary-300);
    }

    p {
        margin: 0 auto;
        color: var(--white);
        font-size: 0.9rem;
        padding-top: 1rem;
    }

    small {
        font-size: 0.7rem;
        font-weight: 500;
    }

    hr {
        width: 40%;
        margin: 0 auto;
        height: 3px;
        border: 0;
        border-top: 3px solid var(--orange);
        filter: drop-shadow(4px 4px var(--white));
    }

    .footer-text {
        width: 60%;
        display: grid;
        gap: 40px;
        grid-template-columns: 0.5fr 0.5fr 0.5fr;
        margin: 0 auto;
        padding: 4rem 0;

        .footer-text-element {
            width: 100%;
            display: flex;
            gap: var.$gap;
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

            .media-icon {
                width: 100%;
                font-size: 3rem;
                color: var(--orange);
                margin: 0.25rem 0;
                transition: var(--transition);
                cursor: pointer;
            }

            .media-icon:hover {
                color: var(--white);
            }
        }
    }

    @media (max-width: 650px) {
        p {
            font-size: 0.7rem;
        }
    }
`;

export default Wrapper;
