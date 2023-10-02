import styled from 'styled-components';

export const StyledHeader = styled.header`

  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--azul-universe-darkest);
  justify-content: center;
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  opacity: 1;

div{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10%;
    width: 100%;
    padding: 1rem;
    p{
        font-size: 14px;
        font-weight: 400;
        color: var(--rosa-2b-medium);
        letter-spacing: 0.7px;
    }
}

.div-navbar{
    gap: 10rem;
    border-top: 1px solid #54507367;
    border-bottom: 1px solid #54507367;
    height: 100%;
    padding: 2rem;
    img{
        cursor: pointer;
    }
    ul{
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 2rem;

        li{
            color: var(--rosa-2b-medium);
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 1.08px;
        }
        li:hover {
            color: var(--rosa-2b-dark);
        }  
        span:hover {
            color: var(--rosa-2b-medium);
        }  
        span{
            cursor: pointer;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 1.08px;
        };
    }
}
`;