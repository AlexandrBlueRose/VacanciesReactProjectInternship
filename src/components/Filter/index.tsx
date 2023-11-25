import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import { OptionData } from '@components/controls/Option';
import Select from '@components/controls/Select';
import { useCart } from '@context/cardLoadingContext/CardProvider';
import { Layout, scale } from '@greensight/gds';
import router from 'next/router';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useQueryClient } from 'react-query';

export type keyApi = {
    key: string;
    value: string;
    isSearch: boolean;
    id: string;
};

export interface ISelectFilter {
    title: string;
    dataKey: string;
    dataEventual: string;
    dataPreliminary: string;
    keyApi: keyApi[];
    onChange?: (value: OptionData['value'], key: OptionData['key']) => void;
    onClose?: () => void;
    filtersContext?: keyApi[];
    filterContextChange?: (value: keyApi) => void;
    changeFiltersById?: (value: string, filter: keyApi) => void;
    selectClear?: boolean;
    setSelectClear?: Dispatch<SetStateAction<boolean>>;
}

export interface IFilter {
    filterSelect: ISelectFilter[];
}

const Filter: FC<IFilter> = props => {
    const { filterSelect } = props;
    const { filtersContext, setFiltersContext, changeFiltersById, isSearch, setSearch, filtersS, setFiltersS } =
        useCart();
    const { resetQueries, removeQueries, refetchQueries } = useQueryClient();
    const [selectClear, setSelectClear] = useState(false);
    const [filterFolder, setFilterFolder] = useState<keyApi[]>();
    const resetPathUrl = () => {
        router.push(
            {
                pathname: router.basePath,
                query: {},
            },
            undefined,
            { shallow: true }
        );
    };
    const onSearch = () => {
        setSearch(!isSearch);
        if (filterFolder?.length !== undefined && filterFolder?.length > 0) {
            let preFilter: keyApi[] = [];
            if (filtersContext.length !== filterSelect.length) {
                filtersContext.forEach(filter => {
                    preFilter = filterFolder.filter(filterContext => filterContext.key !== filter.key);
                });
                preFilter.forEach(filter => {
                    setFiltersContext(filter);
                });
                if (filtersContext.length === 0)
                    filterFolder.forEach(filter => {
                        setFiltersContext(filter);
                    });
            }

            setFiltersS(filtersContext);
        } else {
            setFiltersS(filtersContext);
        }
        resetPathUrl();
        setFilterFolder(filtersContext);
        setSelectClear(false);
    };
    const onClear = () => {
        setSearch(!isSearch);
        setFiltersS([]);
        setFilterFolder([]);
        resetPathUrl();
        router.push({
            pathname: router.basePath,
            query: {},
        });
        setSelectClear(true);
    };

    return (
        <Layout
            type="grid"
            align="end"
            cols={{ xxxl: `repeat(auto-fit, minmax(0.4558333333%, ${scale(68.375) + 3}px))` }}
            gap={{ xxxl: [scale(2), scale(4)], md: scale(3) }}
        >
            <Layout gap={scale(2)} cols="repeat(auto-fit, minmax(262px, 1fr))" align="start">
                {filterSelect.map(itemFilter => (
                    <Select
                        keyApi={...itemFilter.keyApi}
                        dataEventual={itemFilter.dataEventual}
                        dataKey={itemFilter.dataKey}
                        dataPreliminary={itemFilter.dataPreliminary}
                        title={itemFilter.title}
                        key={itemFilter.dataKey}
                        filtersContext={filtersContext}
                        filterContextChange={setFiltersContext}
                        changeFiltersById={changeFiltersById}
                        selectClear={selectClear}
                        setSelectClear={setSelectClear}
                    />
                ))}
            </Layout>
            <Button variant={Variant.primary} onClick={onSearch}>
                Search
            </Button>
            <Button variant={Variant.primary} onClick={onClear}>
                Clear
            </Button>
        </Layout>
    );
};

export default Filter;
