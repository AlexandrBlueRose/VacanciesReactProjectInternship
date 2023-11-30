import { IVacancies } from '@GlobalTypes/types';
import { IItem } from '@api/types';

export const cardDataCompletion = (data: IItem): IVacancies => ({
    id: data.id,
    titles: data?.name,
    description: data?.description ? data?.description : 'Loading...',
    classOption: true,
    conditions: {
        form: data?.employment ? data.employment.name : 'Not selected',
        company: data?.employer?.name ? data.employer.name : 'Not selected',
        web: data?.employer?.alternate_url ? data.employer.alternate_url : 'Not selected',
        address: data?.area?.name ? data.area.name : 'Not selected',
    },
    logoUrl: data.employer?.logo_urls?.['240'],
});
