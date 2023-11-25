import { IVacancies } from '@GlobalTypes/types';
import { IItem } from '@api/types';

export const cardDataCompletion = (data: IItem): IVacancies => ({
    id: data.id,
    titles: data?.name,
    description: data?.description ? data?.description : 'Loading...',
    classOption: true,
    conditions: {
        form: data?.employment ? data.employment.name : 'Not Selected',
        company: data?.employer?.name ? data.employer.name : 'Not Selected',
        web: data?.employer?.alternate_url ? data.employer.alternate_url : 'Not Selected',
        address: data?.area?.name ? data.area.name : 'Not Selected',
    },
    logoUrl: data.employer?.logo_urls?.['240'],
});
