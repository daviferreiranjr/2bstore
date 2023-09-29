import styled from 'styled-components';

export const StyledDescriptionProduct = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  width: 50%;

  h1{
    align-self: flex-start;
  }

  p{
    letter-spacing: 0.7px;
    color: var(--azul-universe-darkest);
    font-size: 14px;
    font-weight: 400;
    opacity: 1;
    align-self: flex-start;
    line-height: 1.5rem;
  }

`;