import { createGlobalStyle } from 'styled-components';

export enum Themes {
    // eslint-disable-next-line no-unused-vars
    LIGHT = 'light',
    // eslint-disable-next-line no-unused-vars
    DARK = 'dark'
}

export default createGlobalStyle`
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background:${({ theme }) => theme.colors.background};
  }
`;
