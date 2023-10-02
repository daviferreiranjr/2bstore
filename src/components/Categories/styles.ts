import styled from 'styled-components';

export const StyledCategoriesSession = styled.section`

  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    width: 100%;

    @media screen and (max-width: 599px) {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
    }
  }
`;