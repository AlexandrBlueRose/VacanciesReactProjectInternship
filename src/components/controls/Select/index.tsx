'use client';

import { ISelectFilter } from '@components/Filter';
import { Layout, scale } from '@greensight/gds';
import { colors, shadows } from '@public/tokens.json';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { typography } from 'src/scripts/gds/gds';
import chervonD from '../../../icons/chevronDown.svg';
import Button from '../Button';
import { Size, Variant } from '../Button/enum';
import Option, { OptionData } from '../Option';

const Select: FC<ISelectFilter> = props => {
    const {
        title,
        dataKey,
        dataPreliminary,
        keyApi,
        onChange,
        onClose,
        filterContextChange,
        filtersContext,
        changeFiltersById,
        selectClear,
        dataEventual,
    } = props;
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const rootRef = useRef(null);

    const [selectValue, setSelectValue] = useState(dataPreliminary);
    const [selectKey, setSelectKey] = useState(dataKey);

    useEffect(() => {
        const handleMouseClick = (event: MouseEvent) => {
            const { target } = event;
            event.stopPropagation();
            if (target instanceof Node && !rootRef.current) {
                setIsOpenSelect(false);
            }
        };

        window.addEventListener('click', handleMouseClick);

        return () => {
            window.removeEventListener('click', handleMouseClick);
        };
    }, [onClose]);

    const onOpenSelect = useCallback(() => {
        setIsOpenSelect(!isOpenSelect);
    }, [isOpenSelect]);

    useEffect(() => {
        if (selectClear) setSelectValue(dataEventual);
    }, [dataEventual, selectClear]);

    const onSelectOption = useCallback(
        (value: OptionData['value'], key: OptionData['key']) => {
            setIsOpenSelect(false);
            onChange?.(value, key);
            setSelectValue(value);
            setSelectKey(key);

            if (filtersContext && filterContextChange && changeFiltersById) {
                if (filtersContext.filter(item => item.id === title).length === 0) {
                    filterContextChange({ key: dataKey, value: key, isSearch: true, id: title });
                } else if (!filtersContext.includes({ key, value, isSearch: true, id: title })) {
                    changeFiltersById(title, { key: dataKey, value: key, isSearch: true, id: title });
                }
            }
        },
        [changeFiltersById, dataKey, filterContextChange, filtersContext, onChange, title]
    );

    return (
        <Layout
            type="flex"
            direction="column"
            gap={{ xxxl: scale(1, true) }}
            css={{
                position: 'relative',
            }}
        >
            <Layout.Item
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    css={{
                        paddingBottom: `${scale(1, true)}px`,
                        ...typography('xsMedium'),
                    }}
                >
                    {title}
                </div>
                <Button
                    getTypographyCSS={() => typography('s')}
                    type="button"
                    variant={selectValue === dataEventual ? Variant.selectButtonDefault : Variant.selectButtonActive}
                    data-eventual={selectValue}
                    data-key={selectKey}
                    ref={rootRef}
                    onClick={onOpenSelect}
                    size={Size.md}
                    Icon={chervonD}
                    rounded={!!isOpenSelect}
                >
                    {selectValue}
                </Button>
                <ul
                    css={{
                        display: isOpenSelect ? 'block' : 'none',
                        position: 'absolute',
                        boxShadow: shadows.box,
                        overflow: 'hidden',
                        borderRadius: scale(1, true),
                        top: scale(9),
                        width: '100%',
                        backgroundColor: colors.white,
                        cursor: 'pointer',
                        zIndex: 100,
                    }}
                >
                    {keyApi.map(
                        itemLi =>
                            isOpenSelect && (
                                <Option
                                    key={itemLi.key}
                                    options={{
                                        key: itemLi.key,
                                        value: itemLi.value,
                                    }}
                                    onClick={onSelectOption}
                                />
                            )
                    )}
                </ul>
            </Layout.Item>
        </Layout>
    );
};

export default Select;
