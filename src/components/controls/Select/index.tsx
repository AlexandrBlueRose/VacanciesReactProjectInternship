import { ISelectFilter } from '@components/Filter';
import { Layout, scale, typography } from '@greensight/gds';
import { colors, shadows } from '@public/tokens.json';
import { FC } from 'react';

const Select: FC<ISelectFilter> = props => {
    const { title, dataEventual, dataKey, dataPreliminary, keyApi } = props;
    return (
        <Layout
            type="flex"
            direction="column"
            gap={{ xxxl: scale(1, true) }}
            css={{
                position: 'relative',
                ...typography('s'),
            }}
        >
            {title}
            <button
                type="button"
                data-eventual={dataEventual}
                data-key={dataKey}
                data-preliminary={dataPreliminary}
                css={{
                    position: 'relative',
                    margin: 0,
                    padding: `${scale(1, true)}px ${scale(3, true)}px`,
                    height: scale(12, true) - 4,
                    borderRadius: scale(1, true),
                    color: colors.grey600,
                    textAlign: 'left',
                    border: `1px solid ${colors.grey400}`,
                    ...typography('s'),
                }}
            >
                {dataEventual}
            </button>
            <ul
                css={{
                    position: 'absolute',
                    boxShadow: shadows.box,
                    overflow: 'hidden',
                    borderRadius: scale(1, true),
                    top: scale(10),
                    width: '100%',
                }}
            >
                {keyApi.map(itemLi => (
                    <li
                        value={itemLi.key}
                        key={itemLi.key}
                        css={{
                            display: 'flex',
                            alignItems: 'self-end',
                            padding: `${scale(1)}px ${scale(3, true)}px`,
                            height: `${scale(5)}px`,
                            color: colors.black,
                            ...typography('small'),
                        }}
                    >
                        {itemLi.value}
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default Select;
