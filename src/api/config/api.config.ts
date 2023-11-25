export const API_URL: string = 'https://api.hh.ru';

export const getVacanciesAll = (perPage: number, page: number, filters: string) =>
    `${API_URL}/vacancies?per_page=${perPage}&page=${page}${filters}`;

export const getVacancyById = (id: string) => `${API_URL}/vacancies/${id}`;

export const PER_PAGE: number = 5;
export const MAX_PAGE: number = 2000;
