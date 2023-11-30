/**
 * URL адрес на API
 *
 */
export const API_URL: string = 'https://api.hh.ru';

/**
 * Функция принимающая параметры пагинации и фильтрации и возвращающая итоговый URL адрес для запроса
 *
 * @param {number} perPage кол-во записей для загрузки на каждой странице
 * @param {number} page страница пагинации
 * @param {string} filters параметры фильтрации
 *
 * @returns {string} URL адрес для запроса с заданными параметрами и фильтрами
 */
export const getVacanciesAll = (perPage: number, page: number, filters: string) =>
    `${API_URL}/vacancies?per_page=${perPage}&page=${page}${filters}`;

/**
 * Функция принимающая параметр ID и возвращающая итоговый URL адрес для запроса на получение конкретной записи
 *
 * @param {number} id уникальный идентификатор записи
 *
 * @returns {string} URL адрес для запроса с заданным уникальным идентификатором для загрузки из API
 */
export const getDataByID = (id: string) => `${API_URL}/vacancies/${id}`;

/**
 * Кол-во записей для загрузки из API на одной странице
 *
 */
export const PER_PAGE: number = 5;

/**
 * Максимальное кол-во записей доступных для загрузки
 *
 */
export const MAX_PAGE: number = 2000;
