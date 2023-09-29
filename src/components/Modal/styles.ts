import styled from 'styled-components';

export const StyledModalCart = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;

  .header-modal{
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 10px;
    padding: 2rem;

    h2{
        color: var(--azul-universe-darkest);
        letter-spacing: 0.9px;
        font-size: 22px;
        font-weight: 700;
    }
  }

  .modal{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;

    .cart-null{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;
        width: 60%;

        h2{
            color: var(--azul-universe-darkest);
            letter-spacing: 0.9px;
            font-size: 22px;
            font-weight: 700;
        }

        p{
            text-align: center;
            color: var(--azul-universe-darkest);
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
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
            text-align: center;
        }
    }
  }
}

.modal {
  background: var(--neutral-lightest);
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 30%;
  height: 100%;
  overflow: auto;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
}


.cart-products{
    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li{
            display: flex;
            flex-direction: row;
            padding: 1rem;
            gap: 1rem;
            width: 100%;

            .cart-products-info{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: 60%;
                p, span{
                    color: var(--azul-universe-darkest);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 16px;
                }

                .cart-products-info-count{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    border: 1px solid var(--azul-universe-light);
                    border-radius: 20px;
                    opacity: 1;
                    padding: 0.5rem;
                    width: 96px;

                    .less{
                        color: var(--rosa-2b-medium);
                        font-size: 11px;
                        font-weight: 700;
                    }
                    .more{
                        color: var(--rosa-2b-dark);
                        font-size: 11px;
                        font-weight: 700;
                    }
                }
            }
            img{
                width: 90px;
                height: 90px;
            }
            .cart-products-info-price{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 20%;
                .trash-image{
                    width: 14px;
                    height: 16px;
                    align-self: flex-end;
                }
                .info-price{
                    .original-price{
                        font-weight: 400;
                        font-size: 12px;
                        text-decoration: line-through;
                        letter-spacing: 0.7px;
                        text-align: end;
                }
                    p{
                        font-size: 14px;
                        letter-spacing: 1px;
                        color: var(--azul-universe-darkest);
                        white-space: nowrap;
                    }
                }
            }
        }
    }
}
`;