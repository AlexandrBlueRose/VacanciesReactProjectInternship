import { OptionizedCSS, extractCSSOption, scale } from '@greensight/gds';
import { MEDIA_QUERIES, colors, typography } from '../../../../scripts/gds/gds';
import { Size, Variant } from '../enum';
import { ButtonTheme } from '../types';

const basicTheme: ButtonTheme<typeof Variant, typeof Size> = {
    button: state => {
        const size: OptionizedCSS<typeof Size> = {
            sm: {
                padding: `${scale(1, true) + 0.5}px ${scale(1)}px`,
                ...typography('buttonSm'),
            },
            md: {
                padding: `${scale(2, true) + 0.5}px ${scale(4)}px`,
                ...typography('buttonMd'),
                [MEDIA_QUERIES.sm]: {
                    margin: '0 auto',
                },
                [MEDIA_QUERIES.xs]: {
                    width: '100%',
                },
            },
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                backgroundColor: colors.blue,
                color: colors.white,
                size: 44,
                ':hover': {
                    backgroundColor: colors.blueHover,
                },
                ...(state.disabled && {
                    backgroundColor: colors.grey200,
                    color: colors.grey800,
                }),
                ...(state.rounded && {
                    borderRadius: scale(1, true),
                }),
                ...(state.block && {
                    width: '77%',
                }),
            },
            secondary: {
                backgroundColor: colors.grey900,
                color: colors.white,
                borderRadius: scale(1, true),
                marginLeft: 'auto',
                padding: `${scale(2)}px ${scale(4)}px`,
                ...typography('desktop/button'),
                ':hover': {
                    backgroundColor: colors.black,
                },
                [MEDIA_QUERIES.sm]: {
                    margin: `${scale(3)}px auto 0`,
                },
                [MEDIA_QUERIES.xs]: {
                    width: '100%',
                },
            },
            notactive: {
                backgroundColor: colors.grey200,
                color: colors.grey800,
                size: 44,
                ':hover': {
                    backgroundColor: colors.blueHover,
                },
            },
            link: {
                backgroundColor: 'none',
                color: colors.blue,
                width: '20%',
                textAlign: 'center',
                margin: 'auto',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                gap: '0',
                [MEDIA_QUERIES.md]: {
                    width: '100%',
                },
                ...(state.hidden && {
                    display: 'none',
                }),
                ...(state.block && {
                    position: 'absolute',
                    left: '0',
                    top: scale(8),
                    width: '100%',
                    justifyContent: 'start',
                    columnGap: scale(1),
                    [MEDIA_QUERIES.sm]: {
                        top: scale(17),
                        right: 0,
                        padding: 0,
                    },
                }),
            },
        };

        return {
            ...extractCSSOption(size, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
    icon: state => {
        const sized: OptionizedCSS<typeof Size> = {
            sm: {
                width: scale(2),
                height: scale(2),
                ...typography('buttonSm'),
            },
            md: {
                padding: `${scale(1, true) + 0.5}px ${scale(1)}px`,
                ...typography('buttonMd'),
            },
        };
        const variant: OptionizedCSS<typeof Variant> = {
            link: {
                ...(state.rounded && {
                    transform: 'rotate(180deg)',
                }),
            },
            primary: {
                display: 'none',
            },
            secondary: {
                display: 'none',
            },
            notactive: {
                display: 'none',
            },
        };

        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
};

export const BUTTON_THEMES = {
    basic: basicTheme,
};
