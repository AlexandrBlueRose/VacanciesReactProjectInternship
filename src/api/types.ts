export interface IEmployment {
    id: string;
    name: string;
}
export interface IAddress {
    city: string;
    street: string;
    building: string;
    lat: number;
    lng: number;
    description: null;
    raw: string;
    metro: null;
    metro_stations: any[];
    id: string;
}

export interface IArea {
    id: string;
    name: string;
    url: string;
}
export interface ILogoUrls {
    '90': string;
    '240': string;
    original: string;
}
export interface IEmployer {
    id: string;
    name: string;
    url: string;
    alternate_url: string;
    logo_urls: ILogoUrls | null;
    vacancies_url: string;
    accredited_it_employer: boolean;
    trusted: boolean;
}

export interface ISalary {
    from: number;
    to: number | null;
    currency: string;
    gross: boolean;
}

export interface ISnippet {
    requirement: string;
    responsibility: string;
}
export interface IItem {
    id: string;
    premium: boolean;
    name: string;
    department: null;
    has_test: boolean;
    response_letter_required: boolean;
    area: IArea;
    salary: ISalary;
    description: string | null;
    type: IEmployment;
    address: IAddress | null;
    response_url: null;
    sort_point_distance: null;
    published_at: string;
    created_at: string;
    archived: boolean;
    apply_alternate_url: string;
    insider_interview: null;
    url: string;
    alternate_url: string;
    relations: any[];
    employer: IEmployer;
    snippet: ISnippet;
    contacts: null;
    schedule: IEmployment;
    working_days: any[];
    working_time_intervals: IEmployment[];
    working_time_modes: IEmployment[];
    accept_temporary: boolean;
    professional_roles: IEmployment[];
    accept_incomplete_resumes: boolean;
    experience: IEmployment;
    employment: IEmployment;
    adv_response_url: null;
    is_adv_vacancy: boolean;
    adv_context: null;
    show_logo_in_search?: null;
}

export interface IVacanciesData {
    items: IItem[];
    found: number;
    pages: number;
    per_page: number;
    page: number;
    clusters: null;
    arguments: null;
    fixes: null;
    suggests: null;
    alternate_url: string;
}
