/**
 * Интерфейс данных о месте работы
 */
export interface IEmployment {
    /**
     * Уникальный идентификатор места работы
     */
    id: string;

    /**
     * Название компании предоставляющей место работы
     */
    name: string;
}

/**
 * Интерфейс адреса работодателя
 */
export interface IAddress {
    /**
     * Город расположения офиса/здания
     */
    city: string;

    /**
     * Улица расположения офиса/здания
     */
    street: string;

    /**
     * Строение
     */
    building: string;

    /**
     *
     */
    lat: number;

    /**
     *
     */
    lng: number;

    /**
     * Описание адреса(как проехать и тд)
     */
    description: null;

    /**
     *
     */
    raw: string;

    /**
     * Ближайшее до адреса станция метро
     */
    metro: null;

    /**
     * Массив станций метро
     */
    metro_stations: any[];

    /**
     * Уникальный идентификатор адреса
     */
    id: string;
}

/**
 * Интерфейс
 */
export interface IArea {
    /**
     *
     */
    id: string;

    /**
     *
     */
    name: string;

    /**
     *
     */
    url: string;
}

/**
 *
 */
export interface ILogoUrls {
    /**
     *
     */
    '90': string;

    /**
     *
     */
    '240': string;

    /**
     *
     */
    original: string;
}

/**
 *
 */
export interface IEmployer {
    /**
     *
     */
    id: string;

    /**
     *
     */
    name: string;

    /**
     *
     */
    url: string;

    /**
     *
     */
    alternate_url: string;

    /**
     *
     */
    logo_urls: ILogoUrls | null;

    /**
     *
     */
    vacancies_url: string;

    /**
     *
     */
    accredited_it_employer: boolean;

    /**
     *
     */
    trusted: boolean;
}

/**
 *
 */
export interface ISalary {
    /**
     *
     */
    from: number;

    /**
     *
     */
    to: number | null;

    /**
     *
     */
    currency: string;

    /**
     *
     */
    gross: boolean;
}

/**
 *
 */
export interface ISnippet {
    /**
     *
     */
    requirement: string;

    /**
     *
     */
    responsibility: string;
}

/**
 *
 */
export interface IItem {
    /**
     *
     */
    id: string;

    /**
     *
     */
    premium: boolean;

    /**
     *
     */
    name: string;

    /**
     *
     */
    department: null;

    /**
     *
     */
    has_test: boolean;

    /**
     *
     */
    response_letter_required: boolean;

    /**
     *
     */
    area: IArea;

    /**
     *
     */
    salary: ISalary;

    /**
     *
     */
    description: string | null;

    /**
     *
     */
    type: IEmployment;

    /**
     *
     */
    address: IAddress | null;

    /**
     *
     */
    response_url: null;

    /**
     *
     */
    sort_point_distance: null;

    /**
     *
     */
    published_at: string;

    /**
     *
     */
    created_at: string;

    /**
     *
     */
    archived: boolean;

    /**
     *
     */
    apply_alternate_url: string;

    /**
     *
     */
    insider_interview: null;

    /**
     *
     */
    url: string;

    /**
     *
     */
    alternate_url: string;

    /**
     *
     */
    relations: any[];

    /**
     *
     */
    employer: IEmployer;

    /**
     *
     */
    snippet: ISnippet;

    /**
     *
     */
    contacts: null;

    /**
     *
     */
    schedule: IEmployment;

    /**
     *
     */
    working_days: any[];

    /**
     *
     */
    working_time_intervals: IEmployment[];

    /**
     *
     */
    working_time_modes: IEmployment[];

    /**
     *
     */
    accept_temporary: boolean;

    /**
     *
     */
    professional_roles: IEmployment[];

    /**
     *
     */
    accept_incomplete_resumes: boolean;

    /**
     *
     */
    experience: IEmployment;

    /**
     *
     */
    employment: IEmployment;

    /**
     *
     */
    adv_response_url: null;

    /**
     *
     */
    is_adv_vacancy: boolean;

    /**
     *
     */
    adv_context: null;

    /**
     *
     */
    show_logo_in_search?: null;
}

/**
 * Интерфейс данных полученных от API
 */
export interface IApiData {
    /**
     * Массив записей с типом IItem содержащим структуру данных получаемых от API
     */
    items: IItem[];

    /**
     * Кол-во найденных по заданным параметрам(фильтрам) записей
     */
    found: number;

    /**
     * Кол-во страниц доступных по заданным параметрам(фильтрация и PER_PAGE)
     */
    pages: number;

    /**
     * Кол-во записей в одной странице(задается в api.config.ts)
     */
    per_page: number;

    /**
     * Нынешний номер страницы
     */
    page: number;

    /**
     * Нынешний номер страницы
     */
    clusters: null;

    /**
     * Заданные аргументы в запрос
     */
    arguments: null;

    /**
     *
     */
    fixes: null;

    /**
     *
     */
    suggests: null;

    /**
     * Альтернативная URL для получения данных из API
     */
    alternate_url: string;
}
