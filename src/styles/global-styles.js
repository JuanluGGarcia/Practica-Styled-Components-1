import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  img{
    display: block;
    max-width: 100%;
    border-radius: 50%;
  }
  
  body{
    font-family: 'Barlow Semi Condensed', sans-serif;
    background-color: #ECF2F8;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  .wrapper-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 2fr;
    padding-block: 2rem;
    width: min(95%, 70rem);
    margin-inline: auto;
  }

  

  @media screen and (min-width: 768px){
    .wrapper-grid {
      grid-template-columns: repeat(4, 1fr);
    }
    
    &:nth-child(1) {
      grid-column: span 2;
    }
    &:nth-child(4) {
      grid-column: span 2;
    }

    &:last-child {
      grid-column-start: 4;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
    
`;
