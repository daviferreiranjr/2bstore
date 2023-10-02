import styled from 'styled-components';

export const StyledHeader = styled.header`

  display: flex;
  flex-direction: column;
  background-color: var(--azul-universe-darkest);
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

        @media screen and (max-width: 599px) {
        display: none;
        }

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
    .countTotalProducts{
        display: flex;
        align-items: center;
        position: absolute;
        right: 120px;    
        border-radius: 50%;
        background-color: var(--rosa-2b-dark);
        color: var(--neutral-lightest);
        padding: 5px;
        height: 18px;
        width: 18px;
        font-size: 14px;
        font-weight: 500;

        @media screen and (max-width: 599px) {
        right: 20px;    
        }
    } 

}
`;