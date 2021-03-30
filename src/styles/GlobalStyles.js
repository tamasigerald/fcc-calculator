import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        font-size: 8px;
    }

    body {
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.body};
        font-family: sans-serif;
        font-size: 2rem;
        line-height: 1.4;
        transition: all 0.5s;
    }
`