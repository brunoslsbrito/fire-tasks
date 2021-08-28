import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secondary: string,
            neutral800: string,
            neutral600: string,
            neutral400: string,
            neutral100: string,
            background:string,
        },
    }
}
