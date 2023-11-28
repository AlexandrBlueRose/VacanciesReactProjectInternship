import { CSSObject } from '@emotion/core';
import tokens from '@public/tokens.json';

export const global = {
    base: {
        body: {
            typography: 'm',
            color: tokens.colors.black,
            bg: tokens.colors.white,
            boxSizing: 'border-box',
        },
        focus: {
            width: 2,
            color: tokens.colors.black,
            offset: 2,
        },
        selection: {
            color: tokens.colors.white,
            bg: tokens.colors.black,
        },
    },
    fonts: {
        families: {
            Roboto: {
                stack: '-apple-system, "Roboto", BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            },
        },
        fontFace: [
            {
                '@font-face': {
                    fontFamily: 'Roboto',
                    src: 'url("src/fonts/Roboto/Roboto-Regular.woff2") format("woff2"), url("src/fonts/Roboto/Roboto-Regular.woff") format("woff")',
                    fontDisplay: 'swap',
                },
            },
            {
                '@font-face': {
                    fontFamily: 'Roboto',
                    src: 'url("src/fonts/Roboto/Roboto-Medium.woff2") format("woff2"), url("src/fonts/Roboto/Roboto-Medium.woff") format("woff")',
                    fontDisplay: 'swap',
                    fontWeight: 500,
                },
            },
            {
                '@font-face': {
                    fontFamily: 'Roboto',
                    src: 'url("src/fonts/Roboto/Roboto-Bold.woff2") format("woff2"), url("src/fonts/Roboto/Roboto-Bold.woff") format("woff")',
                    fontDisplay: 'swap',
                    fontWeight: 700,
                },
            },
        ],
    },
};

export const visuallyHiddenCss: CSSObject = {
    position: 'absolute',
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(0px 0px 99.9% 99.9%)',
    overflow: 'hidden',
    height: '1px',
    width: '1px',
    padding: 0,
    border: 0,
};
