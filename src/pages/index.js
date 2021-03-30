import Head from 'next/head';
import Image from 'next/image';
import { Header } from '../components/Header';

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#158e84"
                />
                <meta name="apple-mobile-web-app-title" content="Octetlet" />
                <meta name="application-name" content="Octetlet" />
                <meta name="msapplication-TileColor" content="#00aba9" />
                <meta name="theme-color" content="#158e84" />
            </Head>

            <header>
                <Header>This is the header </Header>
            </header>

            <main>
                Welcome to Octetlet!
                <Image src="/octetlet-loader.svg" height={30} width={30} />
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by Vercel
                </a>
            </footer>
        </>
    );
}
