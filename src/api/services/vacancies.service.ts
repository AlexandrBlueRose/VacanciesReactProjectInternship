import { PER_PAGE, getVacanciesAll, getVacancyById } from '@api/config/api.config';
import { IItem, IVacanciesData } from '@api/types';
import { keyApi } from '@components/Filter/index';
import axios from 'axios';

export const VacanciesService = {
    async getAllVacancies(page: number = 1, perPage: number = PER_PAGE, filters?: keyApi[]) {
        const queryParams =
            filters?.length !== 0 && filters !== undefined
                ? filters.map(item => `&${item.key}=${item.value}`).join('')
                : '';
        return axios.get<IVacanciesData>(getVacanciesAll(perPage, page, queryParams), {
            timeout: 2500,
        });
    },

    async getVacancyById(id: string) {
        return axios.get<IItem>(getVacancyById(id), {
            timeout: 2500,
        });
    },
};
