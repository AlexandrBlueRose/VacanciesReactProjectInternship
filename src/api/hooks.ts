import { keyApi } from '@components/Filter';
import { useCart } from '@context/cardLoadingContext/CardProvider';
import { useInfiniteQuery, useQueries } from 'react-query';
import { MAX_PAGE, PER_PAGE } from './config/api.config';
import { VacanciesService } from './services/vacancies.service';
import { IItem } from './types';

export const useVacanciesFull = (items: IItem[]) =>
    useQueries(
        items.map(item => ({
            queryKey: ['post', item.id],
            queryFn: () => VacanciesService.getVacancyById(item.id).then(results => results.data),
        }))
    );

export const useVacancies = (filter: keyApi[], prerenderData?: IItem[]) => {
    const { filtersS } = useCart();
    const fetchProjects = async ({ pageParam = 1 }) =>
        VacanciesService.getAllVacancies(pageParam, PER_PAGE, filter).then(results => results.data);
    const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, refetch } =
        useInfiniteQuery({
            queryKey: ['vacancies', filter],
            queryFn: fetchProjects,
            getNextPageParam: page => {
                if ((page.page + 1) * PER_PAGE <= MAX_PAGE) {
                    return page.page + 1;
                }
            },
        });
    return { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, refetch };
};
export const convertDataRequest = (cards: IItem[][]) => cards?.reduce<IItem[]>((acc, cur) => [...acc, ...cur], []);

export const useLoadData = (cards: IItem[][]) => {
    const cardsArray: IItem[] = cards?.reduce<IItem[]>((acc, cur) => [...acc, ...cur], []);
    const requestFullData = useVacanciesFull(cardsArray);
    return requestFullData;
};

export async function getServerSideProps() {
    // Fetch data from an API or perform any asynchronous operation
    const { data } = await VacanciesService.getAllVacancies(1, 5, []);
    // Pass the fetched data as props to the component
    return {
        props: {
            data,
        },
    };
}
