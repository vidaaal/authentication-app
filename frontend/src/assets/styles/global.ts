import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-family: 'Noto Sans', sans-serif;
    font-size: 1rem;
    
    a {
      text-decoration: none;
    }
  }
`;
