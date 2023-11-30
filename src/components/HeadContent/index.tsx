import { Metadata } from 'next';
import { FC } from 'react';
import { IHead } from './type';

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'google',
        yandex: 'yandex',
        yahoo: 'yahoo',
        other: {
            me: ['my-email', 'my-link'],
        },
    },
};

const HeadContent: FC<IHead> = props => {
    const { description, author, keywords, favicon, social } = props;
    return (
        <>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta name="format-detection" content="telephone=no" />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />

            <meta property="og:title" content={social?.title} />
            <meta property="og:description" content={social?.description} />
            <meta property="og:url" content={social?.url} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={social?.image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta property="twitter:domain" content={social?.url} />
            <meta property="twitter:url" content={social?.url} />
            <meta name="twitter:title" content={social?.title} />
            <meta name="twitter:description" content={social?.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={social?.image} />
            <meta property="vk:image" content={social?.image} />

            <link rel="icon" href={favicon} />
        </>
    );
};

export default HeadContent;
