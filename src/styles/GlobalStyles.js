import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #ffffff;
    --grey: red;
    --red: #ff0000;
    --transition: 1s ease;

    --bg: var(--black);
    --bgHighlight: var(--white);
    --text: var(--white); 
    --textHighlight: var(--black);

    --section-padding-large: 8rem 4rem;
  }

  @media (max-width: 1250px) {
    :root {
      --section-padding-large: 4rem;
    }
  }

  @media (max-width: 700px) {
    :root {
      --section-padding-large: 2rem;
    }
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-size: 1.8rem;
  }

  body.transition {
    transition: var(--transition);
    transition-property: background, color;
  }

  body.light {
    --bg: var(--white);
    --bgHighlight: var(--black); 
    --text: var(--black); 
    --textHighlight: var(--white);
  }

  p {
    margin: 0;
  }

  ul {
      list-style: none;
      padding: 0;
      margin: 0;
  }

  a {
      color: var(--text);
      text-decoration: none;
      display: block;
  }

  input[type="text"] {
    border: none;
    transition: var(--transition);
    border-bottom: 1px solid var(--textHighlight);
    background: none;

    &:focus {
      outline: none;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    
    &:focus {
      outline:0 !important;
    }

    &.play-btn {
      font-family: rebondBold;
      font-size: 1.8rem;
      background: var(--white);
      color: var(--black);
      padding: 1rem 2rem;
      text-transform: uppercase;
    }
  }


  img {
    max-width: 100%;
  }

  .grid-container {
    padding: 0 4rem;
  }

  .CookieConsent {
    transition: var(--transition);
    width: 300px;
    background: red;
    position: fixed;
    bottom: 4rem !important;
    left: 4rem;
    z-index: 9999;
    padding: 2rem;
    background: var(--text);
    color: var(--textHighlight);

    @media (max-width: 700px) {
      bottom: 2rem !important;
      left: 2rem;
    }

    @media (max-width: 420px) {
      width: calc(100% - 4rem);
    }

    > div:first-of-type {
      margin-bottom: 2rem;
    }

    button {
      transition: var(--transition);
      background: var(--textHighlight);
      color: var(--text);
      padding: 1rem;
      
    }
  }
 
`;

export default GlobalStyles;
