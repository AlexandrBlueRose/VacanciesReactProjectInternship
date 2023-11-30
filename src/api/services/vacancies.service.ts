import { getDataByID, getVacanciesAll } from '@api/config/api.config';
import { IApiData, IItem } from '@api/types';
import { keyApi } from '@components/Filter/index';
import axios from 'axios';

/**
 * Объект содержащий сервисы для получения данных из API
 *
 */
export const ApiService = {
    /**
     * Сервис получения записей от API по заданным параметрам
     *
     * @param {number} perPage кол-во записей для загрузки на каждой странице
     * @param {number} page страница пагинации
     * @param {string} filters параметры фильтрации
     *
     * @returns {AxiosRequestConfig<IApiData> | undefined} Данные от API
     */
    async getAllDataFromApi(page: number, perPage: number, filters?: keyApi[]) {
        const queryParams =
            filters?.length !== 0 && filters !== undefined
                ? filters.map(item => `&${item.key}=${item.value}`).join('')
                : '';

        return axios.get<IApiData>(getVacanciesAll(perPage || 5, page || 1, queryParams), {
            timeout: 2500,
        });
    },

    /**
     * Сервис получения записи от API по заданному ID
     *
     * @param {string} id уникальный идентификатор записи
     *
     * @returns {AxiosRequestConfig<IItem> | undefined} Данные от API
     */
    async getDataByID(id: string) {
        return axios.get<IItem>(getDataByID(id), {
            timeout: 2500,
        });
    },
};
