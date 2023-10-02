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

        img{
            transition: transform 0.3s ease-in-out;
        }

        .tags {
            position: relative;
            top: 50px; 
            p{
               color: var(--rosa-2b-lightest);
               background-color: var(--azul-universe-dark);
               text-align: center;
               border-radius: 2px;
               font-size: 10px;
               text-transform: uppercase;
               padding: 5px;
            }
            .tag-discount{
                background-color: var(--rosa-2b-dark);
            }
        }

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
        .buy{
            color: var(--rosa-2b-lightest);
            background-color: var(--rosa-2b-dark);
            font-size: 14px;
            text-align: center;
            letter-spacing: 1.08px;
            border-radius: 24px;
            padding: 10px 30px;
        }
    }
    li:hover{
            background-color: var(--rosa-2b-lightest);
            border-radius: 24px;
        }

    li .buy {
        display: none;
    }
    li:hover .buy {
        display: block;
    }
    .size-container{
        display: none;
    }
    li:hover .size-container{
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        li{
            border-radius: 16px;
            font-weight: 700;
            color: var(--rosa-2b-dark);
            border: 1px solid var(--rosa-2b-medium);
            padding: 0.3rem;
        }
        li:hover{
            border: 1px solid var(--rosa-2b-dark);
        }
    }
    li:hover img {
        transform: scale(0.9);
    }
}
`;