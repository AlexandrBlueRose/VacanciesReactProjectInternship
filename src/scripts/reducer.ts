import { keyApi } from '@components/Filter';

export type actionType = {
    type: 'add' | 'clear';
    filters: keyApi;
};
export const reducerFilters = (state: keyApi[], action: actionType) => {
    switch (action.type) {
        case 'add': {
            if (state.includes(action.filters, 0)) {
                state.push(action.filters);
            }
            return state;
        }
        case 'clear': {
            state.length = 0;
            return state;
        }
        default:
            return state;
    }
};
