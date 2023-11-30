/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

'use client';

import { CSSObject } from '@emotion/core';
import { scale } from '@greensight/gds';
import { FC, LegacyRef, MouseEventHandler, useEffect, useRef } from 'react';
import { colors, typography } from 'src/scripts/gds/gds';

export type OptionData = {
    value: string;
    key: string;
};

interface OptionProps {
    options: OptionData;
    onClick?: (value: OptionData['value'], key: OptionData['key']) => void;
    css?: CSSObject;
}

const Option: FC<OptionProps> = props => {
    const {
        options: { key, value },
        onClick,
    } = props;

    const rootRef: LegacyRef<HTMLLIElement> | undefined = useRef<HTMLLIElement>(null);

    const handleClick =
        (clickedValue: string, key: string): MouseEventHandler<HTMLLIElement> =>
        () => {
            if (onClick !== undefined) {
                onClick(clickedValue, key);
            }
        };

    useEffect(() => {
        const option = rootRef.current;
        if (!option) return;
        const handleEnterKeyDown = (event: KeyboardEvent) => {
            if (document.activeElement === option && event.key === 'Enter') {
                if (onClick !== undefined) {
                    onClick(value, key);
                }
            }
        };

        option.addEventListener('keydown', handleEnterKeyDown);
        return () => {
            option.removeEventListener('keydown', handleEnterKeyDown);
        };
    }, [value, onClick, key]);

    return (
        <div>
            <li
                value={key}
                key={value}
                ref={rootRef}
                onClick={handleClick(value, key)}
                css={{
                    display: 'flex',
                    alignItems: 'self-end',
                    padding: `${scale(1)}px ${scale(3, true)}px`,
                    height: `${scale(5)}px`,
                    color: colors.black,
                    zIndex: 10,
                    ...typography('s'),
                }}
            >
                {value}
            </li>
        </div>
    );
};

export default Option;
