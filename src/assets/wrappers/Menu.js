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
        font-weight: 500;
        letter-spacing: 0.2rem;
        transition: 0.5s;
        cursor: pointer;
    }

    .menu-element:hover {
        color: #b9cfc3;
    }
`;

export default Wrapper;
