import { keyApi } from '@components/Filter';
import {
    Dispatch,
    FC,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';

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
    const [filtersContext, setFilterContext] = useState<keyApi[]>([]);
    const [filtersS, setFiltersS] = useState<keyApi[]>([]);

    const setFiltersContext = useCallback((value: keyApi) => {
        setFilterContext([value]);
    }, []);
    const changeFiltersById = useCallback(
        (value: string, changeValue: keyApi) => {
            const result: keyApi[] = filtersContext.map(filter => {
                if (filter.id === value) {
                    return changeValue;
                }
                return filter;
            });
            filtersContext.splice(0, filtersContext.length, ...result);
        },
        [filtersContext]
    );

    const providerValue = useMemo(
        () => ({ filtersContext, setFiltersContext, changeFiltersById, isSearch, setSearch, filtersS, setFiltersS }),
        [changeFiltersById, filtersContext, filtersS, isSearch, setFiltersContext]
    );

    return <FilterContext.Provider value={providerValue}>{children}</FilterContext.Provider>;
};
export const useCart = () => {
    const context = useContext(FilterContext);

    if (!context) {
        throw new Error(`Hook useCart must be used within CartProvider`);
    }

    return context;
};

export default CardProvider;
