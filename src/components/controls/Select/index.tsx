import { ISelectFilter } from '@components/Filter';
import { Layout, scale } from '@greensight/gds';
import { colors, shadows } from '@public/tokens.json';
import { FC, useEffect, useRef, useState } from 'react';
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
        setSelectClear,
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
        if (selectClear) setSelectValue('Not Selected');
    }, [selectClear]);

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

    return (
        <Layout
            type="flex"
            direction="column"
            gap={{ xxxl: scale(1, true) }}
            css={{
                position: 'relative',
            }}
        >
            {title}
            <button
                type="button"
                data-eventual={selectValue}
                data-key={selectKey}
                ref={rootRef}
                onClick={onOpenSelect}
                css={{
                    position: 'relative',
                    margin: 0,
                    padding: `${scale(1, true)}px ${scale(3, true)}px`,
                    height: scale(12, true) - 4,
                    borderRadius: scale(1, true),
                    color: colors.grey600,
                    textAlign: 'left',
                    border: `1px solid ${colors.grey400}`,
                }}
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
                    top: scale(10),
                    width: '100%',
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
        </Layout>
    );
};

export default Select;
