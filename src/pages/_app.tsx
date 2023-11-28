import { headData } from '@components/HeadContent/data.head';
import CardProvider from '@context/cardLoadingContext/CardProvider';
import { Metadata } from 'next';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, theme } from '../scripts/gds/gds';

export const metadata: Metadata = {
    title: headData.title,
    description: headData.description,
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

export default function App({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 50 * 1000,
                        cacheTime: 60 * 50 * 1000,
                        retry: 0,
                        refetchOnWindowFocus: process.env.NODE_ENV === 'production',
                    },
                },
            })
    );
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <CardProvider>
                        <Component {...pageProps} />
                    </CardProvider>
                </Hydrate>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
