import { ButtonTheme, OptionizedCSS, colors, extractCSSOption, scale, typography } from '../../../../scripts/gds/gds';

// Конечный набор вариантов компонента
export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary',
    outline = 'outline',
    fill = 'fill',
    ghost = 'ghost',
    dangerous = 'dangerous',
}

// Конечный набор размеров компонента
export enum ButtonSize {
    sm = 'sm',
    md = 'md',
}

// Определяем тему
const basicTheme: ButtonTheme<typeof ButtonVariant, typeof ButtonSize> = {
    button: state => {
        const sized: OptionizedCSS<typeof ButtonSize> = {
            sm: {
                padding: `${scale(1, true) + 0.5}px ${scale(1)}px`,
                ...(typography('button') as any),
            },
            md: {
                // other dimensions..
            },
        };

        const varianted: OptionizedCSS<typeof ButtonVariant> = {
            primary: {
                backgroundColor: colors.primary,
                color: colors.white,
                ':hover': {
                    backgroundColor: colors.primaryHover,
                },
                ...(state.disabled && {
                    backgroundColor: colors.grey200,
                    color: colors.grey800,
                }),
            },
            secondary: {
                // other colors...
            },
        };

        return {
            /// common styles...
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(varianted, state.variant),
        };
    },
    icon: state => {
        /// return styles..
    },
};

export const BUTTON_THEMES = {
    basic: basicTheme,
    // можно расширять для других разделов. можно выносить файл с темой в отдельный файл и переиспользовать
    custom: {
        ...basicTheme,
        icon: state => {
            const css = basicTheme.icon(state);

            return {
                ...css,
                background: 'red', // перезаписываем лишь одно свойство для одного компонента из темы basic
            };
        },
    },
};
