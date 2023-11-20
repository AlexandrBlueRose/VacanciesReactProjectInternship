import Form from '@components/Form';
import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import Section from '@containers/Section';
import { Layout, scale } from '@greensight/gds';
import CardList from '@views/component/CardList';
import Link from 'next/link';
import { FC } from 'react';
import { colors } from 'src/scripts/gds/gds';

const Main: FC = () => (
    <main css={{ marginTop: 400 }}>
        <Section heading="CardList" levelHeading="h2">
            <Layout type="flex" direction="column" css={{ rowGap: `${scale(5)}px` }}>
                <Layout.Item>
                    <CardList />
                </Layout.Item>
                <Layout.Item
                    css={{
                        margin: '0 auto',
                        marginBottom: `clamp(${scale(4)}px, 10%, ${scale(13)}px)`,
                    }}
                >
                    <Button variant={Variant.primary}>Show more</Button>
                </Layout.Item>
            </Layout>
        </Section>
        <Section heading="Form" levelHeading="h2" css={{ backgroundColor: colors.grey100, textAlign: 'center' }}>
            <Form legend="Leave a request" description="We will advise you and help you start a new project" />
            <div css={{ textAlign: 'center', paddingBottom: `clamp(${scale(4)}px , 10%, ${scale(13)}px)` }}>
                By clicking "Send" you confirm your consent to the
                <br />
                <Link href="" color={colors.blue} css={{ textDecoration: 'none', border: 0 }}>
                    processing of personal data
                </Link>
            </div>
        </Section>
    </main>
);

export default Main;
