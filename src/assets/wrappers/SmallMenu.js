import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        text-decoration: none;
        text-transform: uppercase;
    }

    .menu-element {
        padding: 0 0.25rem;
        font-size: 1rem;
        font-weight: 500;
        color: var(--white);
        text-decoration: none;
        letter-spacing: var(--letterSpacing);
        text-align: center;
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        color: var(--black);
        transform: scale(0.95);
    }
`;

export default Wrapper;
