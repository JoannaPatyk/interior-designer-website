import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        width: 100vw;
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
        padding: 0.85rem 0;
        width: 20%;
        font-weight: 900;
        font-size: 1.8rem;
        font-family: var(--primary-fontFamily);
        letter-spacing: calc(var(--letterSpacing) * 2);
        color: var(--white);
        text-align: center;
        border-radius: 25px;
        background-color: var(--primary-500);
        box-shadow: 2px 2px 10px 5px var(--primary-500);
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        color: var(--orange);
        transform: scale(0.9);
    }

    @media (max-width: 1480px) {
        .menu-element {
            width: 18%;
        }
    }

    @media (max-width: 950px) {
        .menu {
            gap: 30px;
        }

        .menu-element {
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
        .menu {
            padding-top: 0;
            gap: 15px;
            flex-direction: column;
        }

        .menu-element {
            width: 50%;
        }
    }
`;

export default Wrapper;
