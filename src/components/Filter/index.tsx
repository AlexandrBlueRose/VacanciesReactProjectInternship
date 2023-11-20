import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import Select from '@components/controls/Select';
import { Layout, scale } from '@greensight/gds';
import { FC } from 'react';

type keyApi = {
    key: string;
    value: string;
};

export interface ISelectFilter {
    title: string;
    dataKey: string;
    dataEventual: string;
    dataPreliminary: string;
    keyApi: keyApi[];
}

export interface IFilter {
    filterSelect: ISelectFilter[];
}

const Filter: FC<IFilter> = props => {
    const { filterSelect } = props;
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
                    />
                ))}
            </Layout>
            <Button variant={Variant.primary}>Search</Button>
        </Layout>
    );
};

export default Filter;
