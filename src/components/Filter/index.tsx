'use client';

import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import { OptionData } from '@components/controls/Option';
import Select from '@components/controls/Select';
import { useCart } from '@context/cardLoadingContext/CardProvider';
import { Layout, scale } from '@greensight/gds';
import closeIcon from '@icons/close.svg';
import router from 'next/router';
import { Dispatch, FC, SetStateAction, useCallback, useState } from 'react';
import { MEDIA_QUERIES, typography } from 'src/scripts/gds/gds';

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
    const { filtersContext, setFiltersContext, changeFiltersById, isSearch, setSearch, setFiltersS } = useCart();
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
    const onSearch = useCallback(() => {
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
    }, [filterFolder, filterSelect.length, filtersContext, isSearch, setFiltersContext, setFiltersS, setSearch]);
    const onClear = useCallback(() => {
        setSearch(!isSearch);
        setFiltersS([]);
        setFilterFolder([]);
        resetPathUrl();
        router.push({
            pathname: router.basePath,
            query: {},
        });
        setSelectClear(true);
    }, [isSearch, setFiltersS, setSearch]);

    return (
        <Layout
            type="grid"
            align="end"
            cols={{ xxxl: `repeat(auto-fit, minmax(0.4558333333%, ${scale(68) + 3}px))` }}
            gap={{ xxxl: [scale(2), scale(4)], md: scale(3) }}
        >
            <Layout gap={scale(2)} cols="repeat(auto-fit, minmax(262px, 1fr))" align="start">
                {filterSelect.map(itemFilter => (
                    <Layout.Item key={itemFilter.dataKey}>
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
                    </Layout.Item>
                ))}
            </Layout>
            <Button
                variant={Variant.primary}
                onClick={onSearch}
                getTypographyCSS={() => typography('s')}
                css={{
                    width: 'max-content',
                    [MEDIA_QUERIES.xs]: {
                        order: 2,
                    },
                }}
            >
                Search
            </Button>
            {(filterFolder?.length || 0) > 0 ? (
                <Button
                    variant={Variant.linkFilter}
                    onClick={onClear}
                    css={{
                        width: 'max-content',
                        [MEDIA_QUERIES.xs]: {
                            order: 1,
                        },
                    }}
                    getTypographyCSS={() => typography('s')}
                    Icon={closeIcon}
                >
                    Clear filters
                </Button>
            ) : null}
        </Layout>
    );
};

export default Filter;
