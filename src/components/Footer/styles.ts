import styled from 'styled-components';

export const StyledFooter = styled.section`
    width: 100%;
    padding: 2rem;
    background-color: var(--azul-universe-lightest);
    opacity: 1;
    display: flex;
    justify-content: center;

    .div-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 90%; 

        @media screen and (max-width: 599px) {
            flex-direction: column;
            gap: 3rem;
            padding: 1rem;
        }
    }

    .div-infos{
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h2{
            font-weight: 600;
            color: var(--azul-universe-darkest);
            font-size: 14px;
            letter-spacing: 0.6px;
        }
        .div-infos-address{
            p{
                font-weight: 500;
                color: var(--azul-universe-darkest);
                font-size: 12px;
                letter-spacing: 0.6px;
            }
        }
    }
`;