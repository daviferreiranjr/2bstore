import styled from 'styled-components';

export const StyledProductDetails = styled.main`
    display: flex;
    flex-direction: row;
    padding: 3rem;
    justify-content: space-around;
    max-width: 90%;

    @media screen and (max-width: 599px) {
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2rem;
            max-width: 100%;
            padding: 1rem;
        }


    .info-images{
        display: flex;
        justify-content: space-around;
        box-sizing: border-box;

        @media screen and (max-width: 599px) {
            justify-content: center;
            align-items: center;
            flex-direction: column-reverse;
        }

        .extra-images{
            display: flex;
            flex-direction: column;
            gap: 1rem;

            @media screen and (max-width: 599px) {
            flex-direction: row;
            }
    
            img{
                max-width: 100%;
                height: auto; 
                display: block; 
                width: 64px;
                height: 64px
            }
        }

        .cover-image{
            img{
                width: 501px;
                height: 501px;
            }
        }
    }

    .info-product{
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 1rem;
        width: 40%;

        @media screen and (max-width: 599px) {
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .tittle{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;

            h1{
                letter-spacing: 1px;
                text-align: left;
            }

            p{
                letter-spacing: 0.6px;
                text-align: left;
                font-size: 14px;
                font-weight: 400;
            }

        }
        
        .buyProduct:hover{
            background-color: var(--rosa-2b-darkest);
        }

        .price{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            border-top: 1px solid #54507367;
            border-bottom: 1px solid #54507367;

            .original-price{
                font-weight: 400;
                font-size: 14px;
                text-decoration: line-through;
                letter-spacing: 0.7px;
            }

            p{
                font-size: 20px;
                letter-spacing: 1px;
                color: var(--azul-universe-darkest);
            }

            .division{
                letter-spacing: 0.6px;
                font-weight: 400;
                font-size: 14px;
            }
        }
        .size{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;

            .size-select{
                display: flex;
                flex-direction: row;
                gap: 0.3rem;
                text-align: left;
            }
            h3{
                font-size: 14px;
                font-weight: 700;
                color: var(--azul-universe-darkest);
            }

            p{
                font-size: 14px;
                font-weight: 400;
            }

            ul{
                display: flex;
                flex-direction: row;
                gap: 0.5rem;

                li{
                    color: var(--rosa-2b-dark);
                    border: 1px solid var(--rosa-2b-medium);
                    padding: 1rem;
                    font-weight: 700;
                    height: 32px;
                    width: 32px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                li:hover{
                    border: 1px solid var(--rosa-2b-dark);
                }
            }
        }

        button{
            width: 100%;
            background: var(--rosa-2b-dark) 0% 0% no-repeat padding-box;
            border-radius: 24px;
            opacity: 1;
            color: var(--rosa-2b-lightest);
            padding: 1rem;
            font-size: 14px;
            font-weight: 700;
            margin-top: 10px;
        }

        .info-shipping-container{
            display: flex;
            flex-direction: column;
            padding: 1rem;
            text-align: left;

            h3{
                font-size: 14px;
                font-weight: 700;
                color: var(--azul-universe-darkest);
                letter-spacing: 0.7px;
                border-bottom: 1px solid #54507367;
                padding: 1rem;
            }

            .info-shipping-value{
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                border-bottom: 1px solid #54507367;

                p{
                    border: 1px solid var(--neutral-medium);
                    border-radius: 20px;
                    color: #2E2E2E;;
                    letter-spacing: 0.7px;
                    padding: 0.5rem;
                    font-weight: 400;
                    width: 30%;
                    text-align: center;
                }

                button{
                    border: 1px solid var(--rosa-2b-dark);
                    background-color: var(--neutral-lightest);
                    color: var(--rosa-2b-dark);
                    font-size: 14px;
                    font-weight: 700;
                    border-radius: 24px;
                    width: 30%;
                    padding: 0.5rem;
                    text-align: center;
                }

                button:hover{
                    background-color: var(--rosa-2b-dark);
                    color: var(--rosa-2b-lightest);
                }

                a{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--rosa-2b-dark);
                    width: 30%;
                    cursor: pointer;
                }

                a:hover{
                    border-bottom: 1px solid var(--rosa-2b-dark);
                    align-self: center;
                    width: 21%;
                }
            }
        }

        .info-shipping-value-result{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid #54507367;

            p{
                color: var(--azul-universe-darkest);
            }

            .info-shipping-option{
                display: flex;
                flex-direction: column;
                gap: 0.3rem;
                p{
                    font-size: 14px;
                    font-weight: 400;
                    color: var(--azul-universe-darkest);
                    letter-spacing: 0.7px;
                }
            }
                
        }
    }
`;