import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        width: 50vw;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 25px;
        text-decoration: none;
        text-transform: uppercase;
    }

    .menu-element {
        width: 20%;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 500;
        color: var(--black);
        text-decoration: none;
        letter-spacing: var(--letterSpacing);
        text-align: center;
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        color: var(--orange);
        font-weight: 900;
        transform: scale(0.95);
    }

    @media (max-width: 1380px) {
        .menu-element {
            padding: 0.5rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 1140px) {
        .menu-element {
            padding: 0.5rem 0;
            font-size: 0.8rem;
        }
    }

    @media (max-width: 925px) {
        .menu {
            width: 60vw;
        }
    }

    @media (max-width: 785px) {
        .menu {
            width: 70vw;
        }
    }

    @media (max-width: 665px) {
        .menu {
            width: 80vw;
            gap: 15px;
        }
    }

    @media (max-width: 540px) {
        .menu {
            gap: 10px;
        }

        .menu-element {
            font-size: 0.7rem;
            letter-spacing: 0.05rem;
        }
    }

    @media (max-width: 460px) {
        .menu {
            gap: 5px;
        }

        .menu-element {
            font-size: 0.6rem;
        }
    }

    @media (max-width: 370px) {
        .menu {
            width: 90vw;
        }

        .menu-element {
            font-size: 0.5rem;
        }
    }
`;

export default Wrapper;
