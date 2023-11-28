import { PER_PAGE } from '@api/config/api.config';
import { IItem } from '@api/types';
import Card from '@components/Card';
import { cardDataCompletion } from '@components/Card/script';
import { Layout, scale } from '@greensight/gds';
import { MainPageProps } from '@views/homePage';
import { FC, JSX } from 'react';

const onLoad = (requestFullData: any[] /** ToDO fix */) => {
    const cardCompletion = requestFullData.map(item => {
        if (item.data !== undefined) {
            return cardDataCompletion(item.data);
        }
        return null;
    });

    const ret = cardCompletion.map(item => {
        if (item !== undefined) {
            return <Card card={item} key={item?.id || 0} />;
        }
        return null;
    });
    return ret;
};

const onPreLoad = (requestFullData: IItem[]) => {
    const cardCompletion = requestFullData.map(item => {
        if (item !== undefined) {
            return cardDataCompletion(item);
        }
        return null;
    });

    const ret = cardCompletion.map(item => {
        if (item !== undefined) {
            return <Card card={item} key={item?.id || 0} />;
        }
        return null;
    });
    return ret;
};

type cardProps = Omit<MainPageProps, 'onLoadCards'>;

const CardList: FC<cardProps> = props => {
    const { data, prefetchData } = props;
    let dataCards: (JSX.Element | null)[] = [];

    const isLoading = data.filter(item => item.status === 'success').length;

    const prefetchRequest = prefetchData.reduce<IItem[]>((acc, cur) => [...acc, ...cur], []);

    const cardPreload = onPreLoad(prefetchRequest);

    const cardsPreloadLength = cardPreload.length;

    if (cardsPreloadLength > PER_PAGE) {
        dataCards = [
            ...onLoad(data).slice(0, cardsPreloadLength - PER_PAGE),
            ...cardPreload.slice(cardsPreloadLength - PER_PAGE),
        ];
    }

    if (isLoading === cardsPreloadLength) {
        dataCards = onLoad(data);
    }
    return (
        <Layout type="flex" direction="column" css={{ rowGap: `${scale(4)}px` }}>
            <Layout.Item>{isLoading < 5 ? [...cardPreload] : [...dataCards]}</Layout.Item>
        </Layout>
    );
};

export default CardList;
