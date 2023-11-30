import { Head, Html, Main, NextScript } from 'next/document';
import { roboto } from 'src/scripts/gds/themes/font';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className={roboto.className}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
