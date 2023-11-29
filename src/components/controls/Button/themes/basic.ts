import { OptionizedCSS, extractCSSOption, scale } from '@greensight/gds';
import { MEDIA_QUERIES, colors, typography } from 'src/scripts/gds/gds';
import { Size, Variant } from '../enum';
import { ButtonTheme } from '../types';

const basicTheme: ButtonTheme<typeof Variant, typeof Size> = {
    button: state => {
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                backgroundColor: colors.blue,
                color: colors.white,
                height: 44,
                width: 'max-content',
                borderRadius: scale(1, true),
                padding: `${scale(1)}px ${scale(4)}px`,
                ...typography('xs'),
                ':hover': {
                    backgroundColor: colors.blueHover,
                },
                [MEDIA_QUERIES.xs]: {
                    width: '100%',
                },
                ...(state.disabled && {
                    backgroundColor: colors.grey200,
                    color: colors.grey800,
                }),
            },
            secondary: {
                backgroundColor: colors.grey900,
                color: colors.white,
                borderRadius: scale(1, true),
                marginLeft: 'auto',
                padding: `${scale(1)}px ${scale(4)}px`,
                height: `${scale(6) - 4}px`,
                ...typography('xs'),
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
                height: 44,
                ':hover': {
                    backgroundColor: colors.blueHover,
                },
            },
            link: {
                backgroundColor: 'none',
                color: colors.blue,
                textAlign: 'center',
                margin: 'auto',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                gap: '0',
                flexDirection: 'row-reverse',
                ...typography('m'),
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
            linkFilter: {
                backgroundColor: 'none',
                color: colors.blue,
                width: 'max-content',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                gap: '0',
                ':after': {
                    content: "''",
                    position: 'absolute',
                    height: '1px',
                    opacity: 0.2,
                    backgroundColor: colors.blue,
                    width: '82px',
                    marginTop: '20px',
                    marginLeft: '17px',
                    zIndex: -10,
                },
                ...typography('m'),
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
            selectButtonDefault: {
                position: 'relative',
                margin: 0,
                padding: `${scale(1, true)}px ${scale(3, true)}px`,
                height: scale(6) - 4,
                borderRadius: scale(1, true),

                color: colors.grey600,
                textAlign: 'left',
                border: `1px solid ${colors.grey400}`,
                ...typography('s'),
            },
            selectButtonActive: {
                position: 'relative',
                margin: 0,
                padding: `${scale(1, true)}px ${scale(3, true)}px`,
                height: scale(6) - 4,
                borderRadius: scale(1, true),
                color: colors.black,
                textAlign: 'left',
                border: `1px solid ${colors.grey400}`,
                ...typography('s'),
            },
        };

        return {
            ...extractCSSOption(variant, state.variant),
        };
    },
    icon: state => {
        const sized: OptionizedCSS<typeof Size> = {
            sm: {
                width: scale(2),
                height: scale(2),
                ...typography('s'),
            },
            md: {
                padding: `${scale(1, true) + 0.5}px ${scale(1)}px`,
                ...typography('xs'),
            },
            lg: {},
            xl: {},
            xs: {},
            xxl: {},
            xxs: {},
            xxxl: {},
            xxxs: {},
        };
        const variant: OptionizedCSS<typeof Variant> = {
            link: {
                padding: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100%',
                width: scale(2),
                height: scale(2),
                marginTop: '4px',
                ...(state.rounded && {
                    transform: 'rotate(180deg)',
                    top: 'calc(30%)',
                    transition: '0.5s',
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
            linkFilter: {
                display: 'block',
                marginTop: '4px',
            },
            selectButtonActive: {
                padding: 0,
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100%',
                width: scale(2),
                height: scale(2),
                top: 'calc(50%)',
                right: scale(3, true),
                transform: 'translateY(-50%)',
                ...(state.rounded && {
                    transform: 'rotate(180deg)',
                    top: 'calc(30%)',
                    transition: '0.5s',
                }),
            },
            selectButtonDefault: {
                padding: 0,
                position: 'absolute',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100%',
                width: scale(2),
                height: scale(2),
                top: 'calc(50%)',
                right: scale(3, true),
                transform: 'translateY(-50%)',
                ...(state.rounded && {
                    transform: 'rotate(180deg)',
                    top: 'calc(30%)',
                    transition: '0.5s',
                }),
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
