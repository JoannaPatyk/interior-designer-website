import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        padding: 2rem 0;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0 auto;
    }

    .menu-element {
        width: 10%;
        padding: 0 1rem;
        font-weight: 900;
        font-size: 1.2rem;
        font-family: var(--primary-fontFamily);
        letter-spacing: var(--letterSpacing);
        text-align: center;
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
            padding: 0 1.5rem;
        }
    }

    @media (max-width: 950px) {
        .menu {
            gap: 10px;
        }

        .menu-element {
            width: 20%;
        }
    }

    @media (max-width: 800px) {
        .menu-element {
            width: 20%;
            padding: 0;
        }
    }

    @media (max-width: 700px) {
        .menu-element {
            width: 25%;
            padding: 0;
        }
    }

    @media (max-width: 600px) {
        .menu-element {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 450px) {
        .menu {
            padding: 2rem 0;
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
