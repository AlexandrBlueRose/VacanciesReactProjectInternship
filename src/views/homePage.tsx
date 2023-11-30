import { IItem } from '@api/types';
import Filter from '@components/Filter';
import { filterData } from '@components/Filter/filter.data';
import Form from '@components/Form';
import HeadContent from '@components/HeadContent';
import { headData } from '@components/HeadContent/data.head';
import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import Main from '@containers/Main';
import Section from '@containers/Section';
import { Layout, scale } from '@greensight/gds';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import { UseQueryResult } from 'react-query';
import { MEDIA_QUERIES, colors, typography } from 'src/scripts/gds/gds';
import Header from '../containers/Header';
import CardList from './component/CardList';

const Footer = dynamic(() => import('@components/Footer'), {
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
        <Main>
            <Section heading="CardList" levelHeading="h2" isHidden>
                <Layout type="flex" direction="column" css={{ rowGap: `${scale(5)}px` }}>
                    <Layout.Item>
                        <CardList prefetchData={prefetchData} data={data} />
                    </Layout.Item>
                    <Layout.Item
                        css={{
                            margin: '0 auto',
                            marginBottom: `clamp(${scale(4)}px, 10%, ${scale(13)}px)`,
                            [MEDIA_QUERIES.md]: {
                                width: '100%',
                            },
                        }}
                    >
                        {data.length > 0 ? (
                            <Button
                                variant={Variant.primary}
                                onClick={onLoadCards}
                                getTypographyCSS={() => typography('s')}
                                css={{
                                    minWidth: `${scale(48)}px`,
                                    [MEDIA_QUERIES.md]: {
                                        minWidth: '100%',
                                    },
                                }}
                            >
                                Show more
                            </Button>
                        ) : (
                            <div />
                        )}
                    </Layout.Item>
                </Layout>
            </Section>
            <Section
                heading="Form"
                levelHeading="h2"
                isHidden
                css={{ backgroundColor: colors.grey100, paddingTop: `${scale(8)}px` }}
            >
                <Form legend="Leave a request" description="We will advise you and help you start a new project" />
                <div
                    css={{
                        textAlign: 'center',
                        paddingBottom: `clamp(${scale(4)}px , 10%, ${scale(13)}px)`,
                        ...typography('m'),
                    }}
                >
                    By clicking &quot;Send&quot; you confirm your consent to the
                    <br />
                    <Link
                        href=""
                        css={{
                            textDecoration: 'none',
                            border: 0,
                            color: colors.blue,
                            display: 'flex',
                            justifyContent: 'center',
                            ':after': {
                                content: "''",
                                position: 'absolute',
                                height: '1px',
                                opacity: 0.2,
                                backgroundColor: colors.blue,
                                width: '199px',
                                marginTop: '21px',
                            },
                        }}
                    >
                        processing of personal data
                    </Link>
                </div>
            </Section>{' '}
        </Main>
        <Footer />
    </>
);

export default MainVacanciesPage;
