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
    padding-block: 2rem;
    width: min(95%, 70rem);
    margin-inline: auto;
  }
  .wrapper-grid:nth-child(1) {
    grid-area: 'one';
  }
  .wrapper-grid:nth-child(2) {
    grid-area: 'two';
  }
  .wrapper-grid:nth-child(3) {
    grid-area: 'three';
  }
  .wrapper-grid:nth-child(4) {
    grid-area: 'four';
  }
  .wrapper-grid:nth-child(5) {
    grid-area: 'five';
  }
  
`;