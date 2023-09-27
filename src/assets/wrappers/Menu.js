import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        padding: 2rem 0 3rem;
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0 auto;
    }

    .menu-element {
        padding: 0.5rem 0;
        width: 13%;
        font-weight: 900;
        font-size: 1.8rem;
        font-family: var(--primary-fontFamily);
        letter-spacing: var(--letterSpacing);
        color: var(--white);
        text-align: center;
        filter: drop-shadow(2px 2px var(--white));
        background-color: var(--primary-500);
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        color: var(--orange);
        transform: scale(0.9);
    }

    @media (max-width: 1480px) {
        .menu-element {
            width: 12%;
        }
    }

    @media (max-width: 1280px) {
        .menu-element {
            width: 15%;
        }
    }

    @media (max-width: 1180px) {
        .menu-element {
            width: 18%;
        }
    }

    @media (max-width: 950px) {
        .menu {
            gap: 30px;
        }

        .menu-element {
            width: 20%;
            font-size: 1.2rem;
        }
    }

    @media (max-width: 800px) {
        .menu-element {
            width: 20%;
        }
    }

    @media (max-width: 700px) {
        .menu-element {
            width: 25%;
        }
    }

    @media (max-width: 600px) {
        .menu-element {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 450px) {
        .menu {
            gap: 5px;
        }

        .menu-element {
            font-size: 0.75rem;
        }
    }

    @media (max-width: 380px) {
        .menu {
            padding: 1.5rem 0;
        }

        .menu-element {
            font-size: 0.6rem;
        }
    }
`;

export default Wrapper;
