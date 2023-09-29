import styled from 'styled-components';

export const StyledRealisesSession = styled.section`
.realises{
    padding: 5rem;
}
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 2rem;

    .arrow{
        border: 1px solid #E0E0E0;
        opacity: 1;
        border-radius: 50%;
        padding: 0.5rem;
        cursor: pointer;
    }

    li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        .div-price{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.3rem;

            .div-price-value{
                display: flex;
                flex-direction: row;
                gap: 0.5rem;
                .original-price{
                    font-weight: 400;
                    font-size: 14px;
                    text-decoration: line-through;
                }
            }
        }

        div{
            display: flex;
            flex-direction: row;
            gap: 0.3rem;
        }

        h2{
            text-align: center;
        }
        .division{
            color: var(--azul-universe-darkest);
            text-align: center;
            font-weight: 400;
            font-size: 14px;
        }
    }

    
}
`;