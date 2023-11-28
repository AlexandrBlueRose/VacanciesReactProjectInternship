export interface IHeadingProp {
    heading?: string;
}

export type ISectionProp = {
    levelHeading?: 'h1' | 'h2' | 'h3' | 'h4';
    className?: string | undefined;
    isHidden?: boolean;
} & Required<IHeadingProp>;

interface IConditions {
    form: string;
    company?: string;
    web?: string;
    address?: string;
}
export interface IVacancies {
    id: string;
    titles: string;
    description?: string;
    logoUrl?: string;
    conditions?: IConditions;
    classOption: boolean;
}

export type FiltersApi = {
    key: string;
    value: string;
};
