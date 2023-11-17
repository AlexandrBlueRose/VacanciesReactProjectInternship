import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainVacanciesPage from '@views/homePage';
import { NextPage } from 'next';
import { useState } from 'react';
import { ThemeProvider, theme } from '../scripts/gds/gds';

const HomePage: NextPage = () => {
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
                <MainVacanciesPage />
            </QueryClientProvider>
        </ThemeProvider>
    );
};

export default HomePage;
