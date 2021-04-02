import React from 'react';

const SiteIcons = () => {
    return (
        <>
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
        </>
    );
};

export default SiteIcons;
