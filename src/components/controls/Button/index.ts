import { ButtonProps, EnumLike, useThemeCSS } from '@greensight/gds';
import { useMemo } from 'react';

export const BaseButton = <V extends EnumLike, S extends EnumLike>(
    {
        children,
        block = false,
        theme, // theme, variant, size будут
        size, // будет типизированы дальше, поэтому не имеют значения по-умолчанию
        variant,
        Icon,
        iconAfter = false, // важно дать значения по-умолчанию для параметров состояния,
        hidden = false, // чтобы избежать null check внутри темы
        type = 'button',
        external = false,
        disabled = false,
        rounded = true,
        css,
        ...props
    }: ButtonProps<V, S>,
    ref: Ref<HTMLButtonElement>
) => {
    const state = useMemo<ButtonStateFull<V, S>>(
        () => ({
            disabled,
            hasChildren,
            hidden,
            size,
            variant,
            block,
            iconAfter,
            rounded,
        }),
        [block, disabled, hasChildren, hidden, iconAfter, size, variant, rounded]
    );

    if (!theme) {
        throw new Error('[Button] theme is required');
    }

    const { button: totalCSS, icon: iconCSS } = useThemeCSS(theme!, state);
};
