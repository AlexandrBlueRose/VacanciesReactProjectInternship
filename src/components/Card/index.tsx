import { IVacancies } from '@GlobalTypes/types';
import { IItem } from '@api/types';
import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import { Layout, scale } from '@greensight/gds';
import { UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import Image from 'next/image';
import { FC } from 'react';
import { colors, shadows } from 'src/scripts/gds/gds';
import { cardDataCompletion } from './script';

interface CardProps {
    card: IVacancies;
}

const Card: FC<CardProps> = props => {
    const { card } = props;
    return (
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
                                                {card.titles}
                                            </h3>
                                        </Layout.Item>
                                        <Layout.Item>
                                            <Image
                                                alt="logo"
                                                src={card.logoUrl ? card.logoUrl : ''}
                                                loading="lazy"
                                                height={40}
                                                width={100}
                                            />
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
                                            <span css={{ color: colors.black }}>{card.conditions?.form}</span>
                                        </Layout.Item>
                                    </Layout>
                                </Layout.Item>
                                <Layout.Item>
                                    <Layout type="flex" css={{ gap: `${scale(1)}px`, color: colors.grey700 }}>
                                        <Layout.Item>Company</Layout.Item>
                                        <Layout.Item>
                                            <span css={{ color: colors.black }}>{card.conditions?.company}</span>
                                        </Layout.Item>
                                    </Layout>
                                </Layout.Item>
                                <Layout.Item>
                                    <Layout type="flex" css={{ gap: `${scale(1)}px`, color: colors.grey700 }}>
                                        <Layout.Item>Web</Layout.Item>
                                        <Layout.Item>
                                            <span css={{ color: colors.black }}>{card.conditions?.web}</span>
                                        </Layout.Item>
                                    </Layout>
                                </Layout.Item>
                                <Layout.Item>
                                    <Layout type="flex" css={{ gap: `${scale(1)}px`, color: colors.grey700 }}>
                                        <Layout.Item>Address</Layout.Item>
                                        <Layout.Item>
                                            <span css={{ color: colors.black }}>{card.conditions?.address}</span>
                                        </Layout.Item>
                                    </Layout>
                                </Layout.Item>
                            </Layout>
                        </Layout.Item>
                        <Layout.Item
                            css={{
                                width: '100%',
                                position: 'relative',
                                maxHeight: `130px`,
                                maxWidth: '63.3%',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: card.description !== undefined ? card.description : '<div>Bad</div>',
                                }}
                            />
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
};
export const onLoad = (requestFullData: UseQueryResult<AxiosResponse<IItem, any>, Error>[]) => {
    const cardCompletion = requestFullData.map(item =>
        item?.data?.data !== undefined ? cardDataCompletion(item?.data?.data) : 'Data error'
    );

    const ret = cardCompletion.map(item => {
        if (item !== 'Data error') {
            return <Card card={item} key={item.id} />;
        }
    });
    return ret;
};
// todo вынести часть стилей layouts and items
export default Card;
