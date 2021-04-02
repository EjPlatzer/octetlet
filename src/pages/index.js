import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/Header';
import SiteIcons from '@components/SiteIcons.js';

export default function Home() {
    return (
        <>
            <Head>
                <title>Octetlet</title>
                <SiteIcons />
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
