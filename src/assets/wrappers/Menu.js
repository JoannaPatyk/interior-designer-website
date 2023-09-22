import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        width: 50%;
        padding: 1rem 0;
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        text-transform: uppercase;
        margin: 0 auto;
    }

    .menu-element {
        width: 15%;
        padding: 0 0.5rem;
        font-weight: 500;
        font-family: var(--primary-fontFamily);
        letter-spacing: var(--letterSpacing);
        text-align: center;
        border-bottom: 2px solid transparent;
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        color: var(--orange);
        font-weight: 900;
        transform: scale(0.95);
    }

    @media (max-width: 600px) {
        .menu-element {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 450px) {
        .menu {
            padding: 0.35rem 0;
            gap: 5px;
        }

        .menu-element {
            font-size: 0.75rem;
        }
    }
`;

export default Wrapper;
