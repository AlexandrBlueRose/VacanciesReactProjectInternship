import { PER_PAGE } from '@api/config/api.config';
import { IItem } from '@api/types';
import Card from '@components/Card';
import { cardDataCompletion } from '@components/Card/script';
import { Layout, scale } from '@greensight/gds';
import { UseQueryResult } from '@tanstack/react-query';
import { FC, JSX } from 'react';

const onLoad = (requestFullData: UseQueryResult<IItem, unknown>[]) => {
    const cardCompletion = requestFullData.map(item => {
        if (item.data !== undefined) {
            return cardDataCompletion(item.data);
        }
    });

    const ret = cardCompletion.map(item => {
        if (item !== undefined) {
            return <Card card={item} key={item.id} />;
        }
    });
    return ret;
};

const onPreLoad = (requestFullData: IItem[]) => {
    const cardCompletion = requestFullData.map(item => {
        if (item !== undefined) {
            return cardDataCompletion(item);
        }
    });

    const ret = cardCompletion.map(item => {
        if (item !== undefined) {
            return <Card card={item} key={item.id} />;
        }
    });
    return ret;
};
interface cardProps {
    data: UseQueryResult<IItem, unknown>[];
    prefetchData: IItem[][];
}

const CardList: FC<cardProps> = props => {
    const { data, prefetchData } = props;
    let dataCards: (JSX.Element | undefined)[] = [];

    const isLoading = data.filter(item => item.status === 'success').length;

    const prefetchRequest = prefetchData.reduce<IItem[]>((acc, cur) => [...acc, ...cur], []);

    const cardPreload = onPreLoad(prefetchRequest);

    const cardsPreloadLength = cardPreload.length;

    if (cardsPreloadLength > PER_PAGE) {
        dataCards = [
            ...onLoad(data || []).slice(0, cardsPreloadLength - PER_PAGE),
            ...cardPreload.slice(cardsPreloadLength - PER_PAGE),
        ];
    }

    if (isLoading === cardsPreloadLength) {
        dataCards = onLoad(data || []);
    }
    return (
        <Layout type="flex" direction="column" css={{ rowGap: `${scale(4)}px` }}>
            <Layout.Item>{isLoading < 5 ? [...cardPreload] : [...dataCards]}</Layout.Item>
        </Layout>
    );
};

export default CardList;
