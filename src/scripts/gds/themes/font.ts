import localFont from 'next/font/local';

export const roboto = localFont({
    src: [
        {
            path: '../../../fonts/Roboto/Roboto-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../fonts/Roboto/Roboto-Medium.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../fonts/Roboto/Roboto-Regular.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
    preload: true,
    display: 'swap',
});
