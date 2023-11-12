import { createTheme, scale } from '@greensight/gds';

import tokens from '../../../public/tokens.json';

const { colors, shadows } = tokens;

const theme = createTheme({
    tokens,
    settings: {
        global: {
            base: {
                body: {
                    typography: 'body',
                    color: colors.black,
                    bg: colors.white,
                },
                focus: {
                    width: 2,
                    color: colors.brand,
                    offset: 2,
                },
                selection: {
                    color: colors.white,
                    bg: colors.brand,
                },
            },
        },
        components: {
            Button: {
                sizes: {
                    md: {
                        height: scale(6),
                        padding: scale(3),
                        iconSize: scale(3),
                        iconOffset: scale(1),
                        typography: 'buttonMd',
                    },
                },
                themes: {
                    primary: {
                        default: {
                            color: colors.white,
                            bg: colors.brand,
                        },
                        hover: {
                            bg: colors.brandHover,
                        },
                        active: {
                            border: 'transparent',
                            shadow: shadows.inner,
                        },
                        disabled: {
                            bg: colors.grey70,
                            color: colors.grey40,
                        },
                    },
                },
            },
        },
    },
});

export default theme;
