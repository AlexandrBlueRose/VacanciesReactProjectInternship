import { IFilter } from '.';

export const filterData: IFilter = {
    filterSelect: [
        {
            title: 'Form',
            dataEventual: 'Not selected',
            dataPreliminary: 'Not selected',
            dataKey: 'employment',
            keyApi: [
                {
                    key: 'full',
                    value: 'Full time',
                    id: 'Form',
                    isSearch: false,
                },
                {
                    key: 'part',
                    value: 'Part time',
                    id: 'Form',
                    isSearch: false,
                },
                {
                    key: 'probation',
                    value: 'Half time',
                    id: 'Form',
                    isSearch: false,
                },
            ],
        },
        {
            title: 'Experience',
            dataEventual: 'Not selected',
            dataPreliminary: 'Not selected',
            dataKey: 'experience',
            keyApi: [
                {
                    key: 'noExperience',
                    value: 'No experience',
                    id: 'Experience',
                    isSearch: false,
                },
                {
                    key: 'between1And3',
                    value: 'Between 1 and 3',
                    id: 'Experience',
                    isSearch: false,
                },
                {
                    key: 'between3And6',
                    value: 'Between 3 and 6',
                    id: 'Experience',
                    isSearch: false,
                },
                {
                    key: 'moreThan6',
                    value: 'More Than 6',
                    id: 'Experience',
                    isSearch: false,
                },
            ],
        },
    ],
};
