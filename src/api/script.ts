import { IItem } from './types';

/**
 * Вспомогательная функция для конвертации матрицы карточек в массив
 *
 * @param {keyApi[]} cards массив данных от API в виде матрицы
 *
 * @returns {IItem[]} Данные от API в виде массива
 */
export const convertDataRequest = (data: IItem[][]) => data?.reduce<IItem[]>((acc, cur) => [...acc, ...cur], []);
