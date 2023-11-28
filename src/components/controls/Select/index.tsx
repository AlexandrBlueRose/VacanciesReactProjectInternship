'use client';

import { ISelectFilter } from '@components/Filter';
import { CSSObject } from '@emotion/core';
import { Layout, scale } from '@greensight/gds';
import { colors, shadows } from '@public/tokens.json';
import { FC, useEffect, useRef, useState } from 'react';
import { typography } from 'src/scripts/gds/gds';
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
        const optionElement = rootRef.current;
        const handleMouseClick = (event: MouseEvent) => {
            const { target } = event;
            event.stopPropagation();
            if (target instanceof Node && !rootRef.current?.contains(target)) {
                setIsOpenSelect(false);
            }
        };
        const handleKeyboardClick = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                setIsOpenSelect(isOpen => !isOpen);
            }
            if (event.key === 'Escape') {
                setIsOpenSelect(false);
            }
            if (event.key === 'Tab') {
                setIsOpenSelect(false);
            }
        };

        window.addEventListener('click', handleMouseClick);
        optionElement?.addEventListener('keydown', handleKeyboardClick);

        return () => {
            window.removeEventListener('click', handleMouseClick);
            optionElement?.addEventListener('keydown', handleKeyboardClick);
        };
    }, [onClose]);

    const onOpenSelect = () => {
        setIsOpenSelect(!isOpenSelect);
    };

    useEffect(() => {
        if (selectClear) setSelectValue(dataEventual);
    }, [dataEventual, selectClear]);

    const onSelectOption = (value: OptionData['value'], key: OptionData['key']) => {
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
    };
    const selectMainButton: CSSObject = {
        position: 'relative',
        margin: 0,
        padding: `${scale(1, true)}px ${scale(3, true)}px`,
        height: scale(6) - 4,
        borderRadius: scale(1, true),
        color: colors.grey600,
        textAlign: 'left',
        border: `1px solid ${colors.grey400}`,
        ...typography('s'),
    }; // toDo add this to theme
    const selectMainButtonOptionSelected: CSSObject = {
        position: 'relative',
        margin: 0,
        padding: `${scale(1, true)}px ${scale(3, true)}px`,
        height: scale(6) - 4,
        borderRadius: scale(1, true),
        color: colors.black,
        textAlign: 'left',
        border: `1px solid ${colors.grey400}`,
        ...typography('s'),
    };

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
                <button
                    type="button"
                    data-eventual={selectValue}
                    data-key={selectKey}
                    ref={rootRef}
                    onClick={onOpenSelect}
                    css={selectValue !== dataEventual ? selectMainButtonOptionSelected : selectMainButton}
                >
                    {selectValue}
                </button>
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

// const SelectRef = forwardRef(BaseSelect) as typeof BaseSelect;

// export const createSelectWithTheme = <V extends EnumLike, S extends EnumLike>(
//     defaultTheme: SelectTheme<V, S>,
//     defaultVariant: V | keyof V,
//     defaultSize: S | keyof S
// ) => {
//     type SelectReturn = ReturnType<typeof SelectRef>;
//     const ThemedSelect = (({ theme = defaultTheme, variant = defaultVariant, size = defaultSize, ...props }, ref) => (
//         <SelectRef theme={theme} variant={variant} size={size} {...props} />
//     )) as (props: SelectProps<V, S>, ref: Ref<HTMLButtonElement>) => SelectReturn;
//     (ThemedSelect as any).displayName = 'Button';

//     return forwardRef(ThemedSelect) as typeof ThemedSelect;
// };

// export const Select = createSelectWithTheme<typeof Variant, typeof Size>(SELECT_THEMES.basic, Variant.primary, Size.md);

export default Select;
