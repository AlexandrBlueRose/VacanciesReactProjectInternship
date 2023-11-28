import { keyApi } from '@components/Filter';
import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useContext, useState } from 'react';

interface IFilterContext {
    filtersContext: keyApi[];
    setFiltersContext: (value: keyApi) => void;
    changeFiltersById: (value: string, changeValue: keyApi) => void;
    isSearch: boolean;
    setSearch: Dispatch<SetStateAction<boolean>>;
    filtersS: keyApi[];
    setFiltersS: Dispatch<SetStateAction<keyApi[]>>;
}

export const FilterContext = createContext<IFilterContext | null>(null);

const CardProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isSearch, setSearch] = useState(false);
    const filtersContext: keyApi[] = [];
    const [filtersS, setFiltersS] = useState<keyApi[]>([]);

    const setFiltersContext = (value: keyApi) => {
        filtersContext.push(value);
    };
    const changeFiltersById = (value: string, changeValue: keyApi) => {
        const result: keyApi[] = filtersContext.map(filter => {
            if (filter.id === value) {
                // eslint-disable-next-line no-param-reassign
                filter = changeValue;
            }
            return filter;
        });
        filtersContext.splice(0, filtersContext.length, ...result);
    };

    return (
        <FilterContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                filtersContext,
                setFiltersContext,
                changeFiltersById,
                isSearch,
                setSearch,
                filtersS,
                setFiltersS,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
export const useCart = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error(`Hook useCart must be used within CartProvider`);
    }

    return context;
};

export default CardProvider;
