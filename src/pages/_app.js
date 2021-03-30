import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    palette: {
        primary: '#158e84',
        secondary: '#9ccc66',
        error: '#E44C65',
        background: '#333333',
        text: '#f6f7fc',
    },
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
