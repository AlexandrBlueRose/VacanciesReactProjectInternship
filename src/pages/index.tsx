import { MAX_PAGE, PER_PAGE } from '@api/config/api.config';
import { useLoadData, useVacancies } from '@api/hooks';
import { VacanciesService } from '@api/services/vacancies.service';
import { IItem } from '@api/types';
import { keyApi } from '@components/Filter';
import { useCart } from '@context/cardLoadingContext/CardProvider';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import MainVacanciesPage from '@views/homePage';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { UseQueryResult } from 'react-query';

const HomePage: NextPage = () => {
    const { filtersS } = useCart();
    const router = useRouter();
    const { data, fetchNextPage } = useVacancies(filtersS || []);
    const requestData: IItem[][] | undefined = data?.pages.map(items => items.items);
    let dataCards: UseQueryResult<IItem, unknown>[] = [];
    dataCards = useLoadData(requestData || [[]]);
    useEffect(() => {
        router.prefetch(
            `${router.basePath}?per_page=${PER_PAGE}&page=${data?.pages[data.pages.length - 1].page || 0 + 1}`
        );
    }, [data?.pages, router]);
    const onLoadCards = () => {
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
    };
    return <MainVacanciesPage prefetchData={requestData || []} data={dataCards} onLoadCards={onLoadCards} />;
};

export async function getServerSideProps(context: any) {
    const { page } = context.query;
    const fetchProjects = async () => VacanciesService.getAllVacancies(page || 1, PER_PAGE).then(result => result.data);
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
