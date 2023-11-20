import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import { Layout, scale } from '@greensight/gds';
import Image from 'next/image';
import { FC } from 'react';
import { colors, shadows } from 'src/scripts/gds/gds';

const Card: FC = () => (
    <Layout type="flex">
        <Layout.Item
            align="start"
            css={{
                width: '100%',
            }}
        >
            <div
                css={{
                    padding: `${scale(5)}px ${scale(5)}px ${scale(6)}px`,
                    borderRadius: `${scale(2)}px`,
                    boxShadow: shadows.box,
                }}
            >
                <Layout
                    type="flex"
                    align="start"
                    direction="column"
                    css={{
                        gap: `${scale(6, true)}px`,
                    }}
                >
                    <Layout.Item css={{ width: '100%' }}>
                        <Layout
                            type="flex"
                            justify="space-between"
                            align="center"
                            width="100%"
                            wrap
                            css={{
                                wordBreak: 'break-word',
                                gap: `${scale(3, true)}px`,
                            }}
                        >
                            <Layout.Item>
                                <Layout
                                    type="flex"
                                    align="center"
                                    css={{
                                        gap: `${scale(1)}px`,
                                    }}
                                >
                                    <Layout.Item>
                                        <h3
                                            css={{
                                                color: colors.black,
                                                wordBreak: 'break-word',
                                            }}
                                        >
                                            Сотрудник пункта сбора заказов (начинающий специалист)
                                        </h3>
                                    </Layout.Item>
                                    <Layout.Item>
                                        <Image alt="logo" src="" />
                                    </Layout.Item>
                                </Layout>
                            </Layout.Item>
                            <Layout.Item
                                css={{
                                    marginLeft: `auto`,
                                }}
                            >
                                <Button type="button" variant={Variant.secondary}>
                                    Respond
                                </Button>
                            </Layout.Item>
                        </Layout>
                    </Layout.Item>
                    <Layout.Item css={{ width: '100%' }}>
                        <Layout
                            type="flex"
                            wrap
                            css={{
                                gap: `${scale(6)}px`,
                                rowGap: `${scale(5, true)}px`,
                                paddingBottom: `${scale(3, true)}px`,
                            }}
                        >
                            <Layout.Item>
                                <Layout type="flex" css={{ gap: `${scale(1)}px`, color: colors.grey700 }}>
                                    <Layout.Item>Form</Layout.Item>
                                    <Layout.Item>
                                        <span css={{ color: colors.black }}>data</span>
                                    </Layout.Item>
                                </Layout>
                            </Layout.Item>
                            <Layout.Item>
                                <Layout type="flex" css={{ gap: `${scale(1)}px`, color: colors.grey700 }}>
                                    <Layout.Item>Company</Layout.Item>
                                    <Layout.Item>
                                        <span css={{ color: colors.black }}>data</span>
                                    </Layout.Item>
                                </Layout>
                            </Layout.Item>
                            <Layout.Item>
                                <Layout type="flex" css={{ gap: `${scale(1)}px`, color: colors.grey700 }}>
                                    <Layout.Item>Web</Layout.Item>
                                    <Layout.Item>
                                        <span css={{ color: colors.black }}>data</span>
                                    </Layout.Item>
                                </Layout>
                            </Layout.Item>
                            <Layout.Item>
                                <Layout type="flex" css={{ gap: `${scale(1)}px`, color: colors.grey700 }}>
                                    <Layout.Item>Address</Layout.Item>
                                    <Layout.Item>
                                        <span css={{ color: colors.black }}>data</span>
                                    </Layout.Item>
                                </Layout>
                            </Layout.Item>
                        </Layout>
                    </Layout.Item>
                    <Layout.Item
                        css={{
                            width: '100%',
                            position: 'relative',
                            maxHeight: `400px`,
                            maxWidth: '63.3%',
                            overflow: 'hidden',
                        }}
                    >
                        description
                        <div
                            css={{
                                position: 'absolute',
                                top: '90%',
                                background:
                                    'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 12.82%, rgba(255, 255, 255, 0.98) 50.51%, rgba(255, 255, 255, 0.98) 56.86%, #fff 88.19%)',
                                width: '100%',
                                height: '100px',
                                opacity: 1,
                                transition: '0.5s',
                            }}
                        />
                    </Layout.Item>
                    <Layout.Item css={{ width: '100%' }}>
                        <div css={{ margin: '0 auto' }}>
                            <Button variant={Variant.link}>More details</Button>
                        </div>
                    </Layout.Item>
                </Layout>
            </div>
        </Layout.Item>
    </Layout>
);
// todo вынести часть стилей layouts and items
export default Card;
