import styled from 'styled-components';

const Wrapper = styled.div`
    .details-container {
        height: 5vh;
        width: 100%;
        padding-right: 2rem;
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: flex-end;
        background-color: #68957b;
        box-shadow: 1px 1px 10px #68957b;
    }

    .details-container p {
        color: #fefcfd;
        font-weight: 500;
    }

    .detail-element {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .icon {
        color: #fefcfd;
    }
`;

export default Wrapper;
