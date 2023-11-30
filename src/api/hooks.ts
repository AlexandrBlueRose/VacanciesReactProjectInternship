import { keyApi } from '@components/Filter';
import { useInfiniteQuery, useQueries } from 'react-query';
import { MAX_PAGE, PER_PAGE } from './config/api.config';
import { convertDataRequest } from './script';
import { ApiService } from './services/vacancies.service';
import { IItem } from './types';

/**
 * Хук асинхронной параллельной загрузки записей по заданным уникальным идентификаторам
 *
 * @param {IItem[]} items массив записей для дозагрузки необходимых данных
 *
 * @returns {AxiosRequestConfig<IItem> | undefined} Данные от API
 */
export const useApiDataFull = (items: IItem[]) =>
    useQueries(
        items.map(item => ({
            queryKey: ['post', item.id],
            queryFn: () => ApiService.getDataByID(item.id).then(results => results.data),
        }))
    );

/**
 * Хук загрузки данных из API, на вход принимаются массив фильтров
 * Внутри функции вызывается метод получения всех данных из апи посредством axios запроса,
 * данные для запроса задаются задаются в api.config.ts.
 * Дальше данные прокидываются через useInfiniteQuery,
 * пагинация производится встроенной в useInfiniteQuery.getNextPageParam() с параметрами границ пагинации из
 * api.config.ts
 *
 * @param {keyApi[]} filter массив фильтров
 *
 * @returns {AxiosRequestConfig<IItem> | undefined} Данные от API
 */
export const useApiData = (filter: keyApi[]) => {
    const fetchProjects = async ({ pageParam = 1 }) =>
        ApiService.getAllDataFromApi(pageParam, PER_PAGE, filter).then(results => results.data);

    const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, refetch } =
        useInfiniteQuery({
            queryKey: ['vacancies', filter],
            queryFn: fetchProjects,
            getNextPageParam: page => {
                if ((page.page + 1) * PER_PAGE <= MAX_PAGE) return page.page + 1;
            },
        });

    return { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status, refetch };
};

/**
 * Хук загрузки полных данных из API по уникальному идентификатору в каждой записи из массива принятого на вход
 *
 * @param {keyApi[][]} data массив записей из API
 *
 * @returns {AxiosRequestConfig<IItem> | undefined} Данные от API
 */
export const useLoadData = (data: IItem[][]) => {
    const cardsArray: IItem[] = convertDataRequest(data);

    const requestFullData = useApiDataFull(cardsArray);

    return requestFullData;
};
