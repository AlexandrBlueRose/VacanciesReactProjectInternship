import { IVacancies } from '@GlobalTypes/types';
import { IItem } from '@api/types';
import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import { CSSObject } from '@emotion/core';
import { Layout, scale } from '@greensight/gds';
import { UseQueryResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import Image from 'next/image';
import Img from 'public/next.svg';
import { FC, useState } from 'react';
import { MEDIA_QUERIES, colors, shadows, typography } from 'src/scripts/gds/gds';
import { visuallyHiddenCss } from 'src/scripts/gds/themes/global';
import chervonDBlue from '../../../icons/chevronDownLink.svg';
import { cardDataCompletion } from './script';

/**
 * Компонент карточки вакансии
 *
 * @version 0.2
 * @author [Alexandr Khaidarov](https://github.com/AlexandrBlueRose/)
 *
 * @example
 *
 * <Card id={data.key} title={data.title} />
 *
 */
const Card: FC<{ card: IVacancies | null }> = props => {
    const { card } = props;
    const [isDescriptionOpen, setDescriptionIsOpen] = useState(false);
    const descriptionStyle: CSSObject = !isDescriptionOpen
        ? {
              width: '100%',
              position: 'relative',
              maxHeight: `130px`,
              maxWidth: '63.3%',
              overflow: 'hidden',
              transition: '0.5s',
              margin: `${scale(3, true)}px 0`,
              [MEDIA_QUERIES.md]: {
                  maxWidth: '100%',
              },
          }
        : {
              width: '100%',
              position: 'relative',
              maxWidth: '63.3%',
              [MEDIA_QUERIES.md]: {
                  maxWidth: '100%',
              },
          };

    const conditionsStyle: CSSObject = { display: 'flex', gap: `${scale(2)}px`, color: colors.grey700 };
    const conditionValueStyle: CSSObject = { color: colors.black };

    const onOpenDescription = () => {
        setDescriptionIsOpen(!isDescriptionOpen);
    };

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
                        marginBottom: `${scale(4)}px`,
                        borderRadius: `${scale(2)}px`,
                        boxShadow: shadows.box,
                        [MEDIA_QUERIES.xs]: {
                            padding: `${scale(5, true)}px`,
                        },
                    }}
                >
                    <Layout
                        type="flex"
                        align="start"
                        direction="column"
                        css={{
                            gap: `${scale(1, true)}px`,
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
                                                    ...typography('h4'),
                                                }}
                                            >
                                                {card?.titles || 'Not selected'}
                                            </h3>
                                        </Layout.Item>
                                        <Layout.Item
                                            css={{
                                                [MEDIA_QUERIES.xs]: {
                                                    order: -1,
                                                },
                                            }}
                                        >
                                            {card?.logoUrl ? (
                                                <Image
                                                    alt={`${card?.conditions?.company} logo`}
                                                    src={card.logoUrl}
                                                    loading="lazy"
                                                    height={40}
                                                    width={100}
                                                    quality={50}
                                                    css={{ maxHeight: `${scale(5) + 4}px`, width: 'auto' }}
                                                />
                                            ) : (
                                                <Image
                                                    alt={`${card?.conditions?.company} logo`}
                                                    src={Img}
                                                    css={visuallyHiddenCss}
                                                />
                                            )}
                                        </Layout.Item>
                                    </Layout>
                                </Layout.Item>
                                <Layout.Item
                                    css={{
                                        marginLeft: `auto`,
                                        [MEDIA_QUERIES.xs]: {
                                            width: '100%',
                                        },
                                    }}
                                >
                                    <Button
                                        type="button"
                                        variant={Variant.secondary}
                                        getTypographyCSS={() => typography('s')}
                                    >
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
                                    [MEDIA_QUERIES.md]: {
                                        gap: `${scale(1)}px`,
                                    },
                                }}
                            >
                                <Layout.Item>
                                    <dl css={conditionsStyle}>
                                        <dt>Form</dt>
                                        <dd css={conditionValueStyle}>{card?.conditions?.form}</dd>
                                    </dl>
                                </Layout.Item>
                                <Layout.Item>
                                    <dl css={conditionsStyle}>
                                        <dt>Company</dt>
                                        <dd css={conditionValueStyle}>{card?.conditions?.company}</dd>
                                    </dl>
                                </Layout.Item>
                                <Layout.Item>
                                    <dl css={conditionsStyle}>
                                        <dt>Web</dt>
                                        <dd css={conditionValueStyle}>
                                            <a href={card?.conditions?.web} css={{ wordBreak: 'break-all' }}>
                                                {card?.conditions?.web}
                                            </a>
                                        </dd>
                                    </dl>
                                </Layout.Item>
                                <Layout.Item>
                                    <dl css={conditionsStyle}>
                                        <dt>Address</dt>
                                        <dd css={conditionValueStyle}>{card?.conditions?.address}</dd>
                                    </dl>
                                </Layout.Item>
                            </Layout>
                        </Layout.Item>

                        <Layout.Item css={descriptionStyle}>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:
                                        card?.description !== undefined
                                            ? card.description
                                            : '<div>Description not found</div>',
                                }}
                            />
                            <div
                                css={
                                    !isDescriptionOpen
                                        ? {
                                              position: 'absolute',
                                              top: '90%',
                                              background:
                                                  'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 0.98), rgba(255, 255, 255, 1))',
                                              width: '100%',
                                              height: '90px',
                                              opacity: 1,
                                          }
                                        : {
                                              height: 0,
                                              width: 0,
                                              opacity: 0,
                                          }
                                }
                            />
                        </Layout.Item>
                        <Layout.Item css={{ width: '100%' }}>
                            <div css={{ margin: '0 auto' }}>
                                <Button
                                    variant={Variant.link}
                                    onClick={onOpenDescription}
                                    getTypographyCSS={() => typography('s')}
                                    Icon={chervonDBlue}
                                    rounded={!!isDescriptionOpen}
                                >
                                    {!isDescriptionOpen ? 'More details' : 'Less details'}
                                </Button>
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
        return '';
    });

    return ret;
};

export default Card;
