import Form from '@components/Form';
import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import Section from '@containers/Section';
import { Layout, scale } from '@greensight/gds';
import CardList from '@views/component/CardList';
import { MainPageProps } from '@views/homePage';
import Link from 'next/link';
import { FC } from 'react';
import { colors, typography } from 'src/scripts/gds/gds';

const Main: FC<MainPageProps> = ({ onLoadCards, data, prefetchData }) => (
    <main css={{ marginTop: 100 }}>
        <Section heading="CardList" levelHeading="h2" isHidden>
            <Layout type="flex" direction="column" css={{ rowGap: `${scale(5)}px` }}>
                <Layout.Item>
                    <CardList prefetchData={prefetchData} data={data} />
                </Layout.Item>
                <Layout.Item
                    css={{
                        margin: '0 auto',
                        marginBottom: `clamp(${scale(4)}px, 10%, ${scale(13)}px)`,
                    }}
                >
                    {data.length > 0 ? (
                        <Button
                            variant={Variant.primary}
                            onClick={onLoadCards}
                            getTypographyCSS={() => typography('s')}
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
                <Link href="" css={{ textDecoration: 'none', border: 0, color: colors.blue }}>
                    processing of personal data
                </Link>
            </div>
        </Section>
    </main>
);

export default Main;
