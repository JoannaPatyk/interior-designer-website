import styled from 'styled-components';

const Wrapper = styled.div`
    .menu {
        padding: 1rem 0;
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
        letter-spacing: 0.2rem;
        text-align: center;
        transition: 0.5s;
        cursor: pointer;
    }

    .menu-element:hover {
        color: #68957b;
        transform: scale(0.95);
    }
`;

export default Wrapper;
