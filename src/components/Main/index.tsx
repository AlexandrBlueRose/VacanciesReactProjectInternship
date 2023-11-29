import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import Section from '@containers/Section';
import { Layout, scale } from '@greensight/gds';
import CardList from '@views/component/CardList';
import { MainPageProps } from '@views/homePage';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FC } from 'react';
import { MEDIA_QUERIES, colors, typography } from 'src/scripts/gds/gds';

const Form = dynamic(() => import('@components/Form'), {
    loading: () => <p>Loading...</p>,
});

const Main: FC<MainPageProps> = ({ onLoadCards, data, prefetchData }) => (
    <main>
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
                By clicking "Send" you confirm your consent to the
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
        </Section>
    </main>
);

export default Main;
