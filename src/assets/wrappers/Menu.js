import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        padding: 0.5rem 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        text-decoration: none;
        text-transform: uppercase;
    }

    .menu-element {
        padding: 0 0.5rem;
        font-weight: 500;
        letter-spacing: var(--letterSpacing);
        text-align: center;
        border-bottom: 2px solid transparent;
        transition: var(--transition);
        cursor: pointer;
    }

    .menu-element:hover {
        color: var(--primary-300);
        transform: scale(0.95);
    }
`;

export default Wrapper;
