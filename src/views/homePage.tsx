import Filter from '@components/Filter';
import { filterData } from '@components/Filter/filter.data';
import HeadContent from '@components/HeadContent';
import { headData } from '@components/HeadContent/data.head';
import Footer from '@containers/Footer';
import Main from '@containers/Main';
import Head from 'next/head';
import { FC } from 'react';
import Header from '../containers/Header';

const MainVacanciesPage: FC = () => (
    <>
        <Head>
            <HeadContent {...headData} />
        </Head>
        <Header heading="List of vacancies">
            <Filter {...filterData} />
        </Header>
        <Main />
        <Footer />
    </>
);

export default MainVacanciesPage;
