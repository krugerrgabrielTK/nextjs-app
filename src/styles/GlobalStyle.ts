import { createGlobalStyle } from 'styled-components';

import { ITheme } from '../interfaces/themes';

export const GlobalStyle = createGlobalStyle`
    *{
        outline: 0;
    }

    body{
        margin: 0;
        padding: 0;

        font-family: Inter, sans-serif;

        background-color: ${({theme}: ITheme) => theme.colors.background};
    }
`;