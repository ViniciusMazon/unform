import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;

  form {
    margin: 0 1.6rem;
  }

  h1 {
    font: 600 3.6rem 'Montserrat';
    text-align: center;
    padding: 3rem 0;
    color: var(--dark-gray);
  }

  button {
    width: 100%;
    height: 6rem;
    margin: 4rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.8rem;
    background: var(--green);

    font: 500 1.6rem 'Montserrat';
    color: var(--white);

    outline: 0;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: var(--dark-green);
    }
  }
`;
