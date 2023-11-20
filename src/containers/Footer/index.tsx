import { Container, Layout, scale } from '@greensight/gds';
import Link from 'next/link';
import { FC } from 'react';
import { colors } from 'src/scripts/gds/gds';

const Footer: FC = () => (
    <footer css={{ backgroundColor: colors.grey900 }}>
        <Container>
            <Layout
                type="flex"
                wrap
                css={{
                    rowGap: `${scale(5, true)}px`,
                    width: '100%',
                    padding: `${scale(5)}px 0`,
                    color: colors.white,
                }}
            >
                <Layout.Item css={{ marginRight: 'auto' }}>
                    <Layout
                        type="flex"
                        direction="column"
                        css={{
                            gap: `${scale(1)}px`,
                            height: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        <Layout.Item>
                            <div css={{ display: 'flex', flexDirection: 'column', gap: `${scale(1)}px` }}>
                                <Link href="tel:+74993816669">+7 499 391-66-69</Link>

                                <Link href="mailto:mail@greensight.ru">mail@greensight.ru</Link>
                            </div>
                        </Layout.Item>
                    </Layout>
                </Layout.Item>
                <Layout.Item>
                    <Layout
                        type="flex"
                        direction="column"
                        css={{
                            gap: `${scale(1)}px`,
                            height: 'auto',
                        }}
                    >
                        <Layout.Item
                            css={{
                                textAlign: 'end',
                                alignItems: 'end',
                            }}
                        >
                            <div
                                css={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: `${scale(1)}px`,
                                    '&:before': {
                                        // todo
                                        content: '',
                                        position: 'absolute',
                                        height: '1px',
                                        opacity: 0.2,
                                        background: colors.white,
                                        width: '72px',
                                        top: '100%',
                                    },
                                }}
                            >
                                <Link href="https://yandex.ru/maps/-/CDUT6ZMu">
                                    322A, 2nd Floor, Zelenograd, Moscow, Russia
                                </Link>

                                <Link href="">Directions</Link>
                            </div>
                        </Layout.Item>
                    </Layout>
                </Layout.Item>
            </Layout>
        </Container>
    </footer>
);

export default Footer;
