import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap');  :root {
    --neutral-lightest: #FFFFFF;
    --neutral-medium: #E0E0E0;
    --azul-universe-darkest: #110D2F; 
    --azul-universe-dark: #545073;
    --azul-universe-light: #D9D8E6;
    --rosa-2b-lightest: #FFF7FA;
    --rosa-2b-medium: #FFCCD8;
    --azul-universe-lightest: #F8F7FC;
    --rosa-2b-dark: #E8335D;
    --rosa-2b-darkest: #CC2D52;
    --grey-color: #00000080; 


    --sucess: #55E655;
    --negative: #E65555;
    --information: #FFDD55;
    --warning: #155BCB;
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'Urbanist', sans-serif;
    font-style: normal;
  }

  body {
    background: var(--neutral-lightest);
  }

  h1{
    text-align: center;
    color: var(--azul-universe-darkest);
    font-weight: 700;
    font-size: 24px;
    opacity: 1;
    }

  h2{
    font-weight: 400;
    color: var(--azul-universe-darkest);
    line-height: 1rem;
    font-size: 14px;
    letter-spacing: 0.7px;
  }

  p{
    font-weight: 700;
    color: var(--azul-universe-dark);
    font-size: 16px;
  }

  span{
    font-weight: 700;
    color: var(--rosa-2b-dark);
    font-size: 14px;
  }

  li{
    cursor: pointer;
  }

  button{
    cursor: pointer;
  }

  @media screen and (max-width: 599px) {
    html, body {
      overflow-x: hidden;
      max-width: 100%;
    }
  }  
`;