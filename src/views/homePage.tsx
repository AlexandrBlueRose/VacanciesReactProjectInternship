import { IItem } from '@api/types';
import Filter from '@components/Filter';
import { filterData } from '@components/Filter/filter.data';
import HeadContent from '@components/HeadContent';
import { headData } from '@components/HeadContent/data.head';
import Footer from '@containers/Footer';
import Main from '@containers/Main';
import Head from 'next/head';
import { FC } from 'react';
import { UseQueryResult } from 'react-query';
import Header from '../containers/Header';

export type MainPageProps = {
    onLoadCards: () => void;
    data: UseQueryResult<IItem, unknown>[];
    prefetchData: IItem[][];
};

const MainVacanciesPage: FC<MainPageProps> = ({ data, onLoadCards, prefetchData }) => (
    <>
        <Head>
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
