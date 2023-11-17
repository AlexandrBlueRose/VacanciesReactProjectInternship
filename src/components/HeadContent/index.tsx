import { FC } from 'react';
import { IHead } from './type';

const HeadContent: FC<IHead> = props => {
    const { title, description, author, keywords, favicon, social } = props;
    return (
        <>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{title}</title>

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
