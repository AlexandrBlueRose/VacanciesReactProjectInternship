import { IFilter } from '.';

export const filterData: IFilter = {
    filterSelect: [
        {
            title: 'Form',
            dataEventual: 'NotSelected',
            dataPreliminary: 'NotSelected',
            dataKey: 'employment',
            keyApi: [
                {
                    key: 'full',
                    value: 'Full time',
                },
                {
                    key: 'part',
                    value: 'Part time',
                },
                {
                    key: 'probation',
                    value: 'Half time',
                },
            ],
        },
        {
            title: 'Experience',
            dataEventual: 'NotSelected',
            dataPreliminary: 'NotSelected',
            dataKey: 'experience',
            keyApi: [
                {
                    key: 'noExperience',
                    value: 'No experience',
                },
                {
                    key: 'between1And3',
                    value: 'Between 1 and 3',
                },
                {
                    key: 'between3And6',
                    value: 'Between 3 and 6',
                },
                {
                    key: 'moreThan6',
                    value: 'More Than 6',
                },
            ],
        },
    ],
};
