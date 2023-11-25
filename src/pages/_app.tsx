import CardProvider from '@context/cardLoadingContext/CardProvider';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider, theme } from '../scripts/gds/gds';

export default function App({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 5 * 1000,
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
