import styled from 'styled-components';

const Wrapper = styled.div`
    .form-container {
        display: grid;
        place-items: center;
        grid-template-columns: 2fr 1fr;
        background-image: url('https://cdn.pixabay.com/photo/2016/07/08/13/37/texture-1504364_1280.jpg');

        h4 {
            width: 70%;
            font-size: 3rem;
            font-weight: 600;
            text-align: center;
            line-height: 1.8;
            color: var(--orange);
            letter-spacing: 1px;
            filter: drop-shadow(3px 3px var(--black));
        }
    }

    .contact-wrapper {
        justify-content: left;
    }

    .contact-form {
        width: 80%;
        align-items: left;
        background-color: var(--primary-100);
        padding: 2rem 0;
        filter: drop-shadow(10px 10px var(--white));
    }
`;

export default Wrapper;
