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
        fontFace: [
            {
                '@font-face': {
                    fontFamily: 'Roboto',
                    src: 'url(/_next/static/media/4e7449338f3a9fee-s.p.woff2) format("woff2")',
                    fontDisplay: 'swap',
                },
            },
            {
                '@font-face': {
                    fontFamily: 'Roboto',
                    src: 'url(/_next/static/media/f8693cca22ae31bc-s.p.woff2) format("woff2")',
                    fontDisplay: 'swap',
                    fontWeight: 500,
                },
            },
            {
                '@font-face': {
                    fontFamily: 'Roboto',
                    src: 'url(/_next/static/media/2a63183e6dff7d00-s.p.woff2) format("woff2")',
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
