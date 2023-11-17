import HeadContent from '@components/HeadContent';
import { headData } from '@components/HeadContent/data.head';
import Header from '@components/Header';
import Head from 'next/head';
import { FC } from 'react';
import Footer from 'src/containers/Footer';
import Main from 'src/containers/Main';

const MainVacanciesPage: FC = () => (
    <>
        <Head>
            <HeadContent {...headData} />
        </Head>
        <Header heading="List of vacancies" levelHeading={1}>
            test
        </Header>
        <Main />
        <Footer />
    </>
);

export default MainVacanciesPage;
