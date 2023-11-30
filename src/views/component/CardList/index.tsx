import { PER_PAGE } from '@api/config/api.config';
import { convertDataRequest } from '@api/script';
import { IItem } from '@api/types';
import { Layout, scale } from '@greensight/gds';
import Card from '@views/component/Card';
import { cardDataCompletion } from '@views/component/Card/script';
import { MainPageProps } from '@views/homePage';
import { FC, JSX, useEffect, useMemo, useState } from 'react';
import { UseQueryResult } from 'react-query';

const onLoad = (requestFullData: UseQueryResult<IItem, unknown>[]) => {
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

const convertData = (prefetchData: IItem[][]) => {
    const prefetchRequest: IItem[] = convertDataRequest(prefetchData);
    return onPreLoad(prefetchRequest);
};

const CardList: FC<cardProps> = props => {
    const { data, prefetchData } = props;
    const [dataCards, setDataCards] = useState<(JSX.Element | null)[]>();
    const countLoading: number = useMemo(() => data.filter(item => item.status === 'success').length, [data]);

    const cardPreload = useMemo(() => convertData(prefetchData), [prefetchData]);

    useEffect(() => {
        if (cardPreload.length > PER_PAGE) {
            setDataCards([
                ...onLoad(data).slice(0, cardPreload.length - PER_PAGE),
                ...(cardPreload.slice(cardPreload.length - PER_PAGE) || []),
            ]);
        } else {
            setDataCards([...cardPreload]);
        }
        if (countLoading === cardPreload.length) {
            setDataCards(onLoad(data));
        }
    }, [cardPreload, data, countLoading]);

    return (
        <Layout type="flex" direction="column" css={{ rowGap: `${scale(4)}px` }}>
            <Layout.Item>{[...(dataCards || [])]}</Layout.Item>
        </Layout>
    );
};

export default CardList;
