import { IItem } from '@api/types';
import Filter from '@components/Filter';
import { filterData } from '@components/Filter/filter.data';
import HeadContent from '@components/HeadContent';
import { headData } from '@components/HeadContent/data.head';
import Main from '@containers/Main';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { FC } from 'react';
import { UseQueryResult } from 'react-query';
import Header from '../containers/Header';

const Footer = dynamic(() => import('@containers/Footer'), {
    loading: () => <p>Loading...</p>,
});

export type MainPageProps = {
    onLoadCards: () => void;
    data: UseQueryResult<IItem, unknown>[];
    prefetchData: IItem[][];
};

const MainVacanciesPage: FC<MainPageProps> = ({ data, onLoadCards, prefetchData }) => (
    <>
        <Head>
            <title>{headData.title || 'Title not found'}</title>
            <HeadContent {...headData} />
        </Head>
        <Header heading="List of vacancies">
            <Filter {...filterData} />
        </Header>
        <Main prefetchData={prefetchData} data={data} onLoadCards={onLoadCards} />
        <Footer />
    </>
);

export default MainVacanciesPage;
