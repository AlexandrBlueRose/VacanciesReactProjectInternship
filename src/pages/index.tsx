import { MAX_PAGE, PER_PAGE } from '@api/config/api.config';
import { useApiData, useLoadData } from '@api/hooks';
import { ApiService } from '@api/services/vacancies.service';
import { IItem } from '@api/types';
import { keyApi } from '@components/Filter';
import { useCart } from '@context/cardLoadingContext/CardProvider';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import MainVacanciesPage from '@views/homePage';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo } from 'react';

const HomePage: NextPage = () => {
    const { filtersS } = useCart();
    const router = useRouter();
    const { data, fetchNextPage } = useApiData(filtersS || []);
    const requestData: IItem[][] | undefined = useMemo(() => data?.pages.map(items => items.items), [data?.pages]);
    const dataCards = useLoadData(requestData || [[]]);
    useEffect(() => {
        router.prefetch(
            `${router.basePath}?per_page=${PER_PAGE}&page=${data?.pages[data.pages.length - 1].page || 0 + 1}`
        );
    }, [data?.pages, router]);
    const onLoadCards = useCallback(() => {
        const lastPageNum = (data?.pages[data.pages.length - 1].page || 0) + 1;
        router.push(
            {
                pathname: router.basePath,
                query: {
                    ...router.query,
                    page: lastPageNum,
                },
            },
            undefined,
            { shallow: true }
        );
        fetchNextPage();
    }, [data?.pages, fetchNextPage, router]);
    return <MainVacanciesPage prefetchData={requestData || []} data={dataCards} onLoadCards={onLoadCards} />;
};

export async function getServerSideProps(context: any) {
    const { page } = context.query;
    const fetchProjects = async () => ApiService.getAllDataFromApi(page || 1, PER_PAGE).then(result => result.data);
    const queryClient = new QueryClient();

    await queryClient.prefetchInfiniteQuery({
        queryFn: fetchProjects,
        queryKey: [`vacancies`, [] as keyApi[]],
        initialPageParam: 1,
        getNextPageParam: () => {
            if ((page + 1) * PER_PAGE <= MAX_PAGE) {
                return page + 1;
            }
        },
    });

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default HomePage;
