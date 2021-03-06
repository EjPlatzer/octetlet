import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import GlobalStyle from '@styles/GlobalStyle';

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
