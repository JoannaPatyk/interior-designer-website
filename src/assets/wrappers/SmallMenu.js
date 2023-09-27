import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        min-height: 10vh;
        width: 50vw;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        text-decoration: none;
        text-transform: uppercase;
    }

    .menu-element {
        width: 25%;
        font-size: 1.6rem;
        font-weight: 900;
        color: var(--primary-500);
        text-decoration: none;
        letter-spacing: var(--letterSpacing);
        text-align: center;
        filter: drop-shadow(1px 1px transparent);
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        color: var(--orange);
        font-weight: 900;
        transform: scale(0.9);
        filter: drop-shadow(2px 2px var(--primary-500));
    }

    .menu-icon {
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 15%;
        transform: translateY(-50%);
        left: 2%;
        z-index: 100;
        color: var(--orange);
        font-size: 2rem;
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-icon:hover {
        transform: translateY(-50%) scale(0.7);
        color: var(--pink);
    }

    .menu-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -100%;
        transform: translate(-50%, -50%);
        left: 50%;
        z-index: 99;
        opacity: 0;
        transition: var(--transition);
    }

    .menu-open {
        top: 15%;
        opacity: 1;
    }

    @media (max-width: 1380px) {
        .menu-element {
            font-size: 1.4rem;
        }
    }

    @media (max-width: 1140px) {
        .menu-element {
            font-size: 1.2rem;
        }
    }

    @media (max-width: 950px) {
        .menu-icon {
            font-size: 1.6rem;
        }

        .menu-element:hover {
            filter: drop-shadow(1px 1px var(--primary-500));
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

    @media (max-width: 600px) {
        .menu {
            gap: 10px;
        }

        .menu-element {
            font-size: 1rem;
        }
    }

    @media (max-width: 460px) {
        .menu {
            gap: 5px;
        }

        .menu-element {
            font-size: 0.9rem;
            letter-spacing: 0;
        }

        .menu-icon {
            display: none;
        }
    }

    @media (max-width: 390px) {
        .menu {
            width: 90vw;
        }

        .menu-element {
            font-size: 0.8rem;
        }
    }
`;

export default Wrapper;
