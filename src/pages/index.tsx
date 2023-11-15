import Head from 'next/head';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ThemeProvider, theme } from '../scripts/gds/gds';

interface AppProvidersProps {
    children: ReactNode;
}

export default function Home({ children }: AppProvidersProps) {
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
                <Head>
                    <title>Test</title>
                </Head>
                <main>Hello world</main>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
