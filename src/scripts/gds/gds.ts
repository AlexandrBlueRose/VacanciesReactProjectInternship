import { CSSObject } from '@emotion/core';
import {
    ComponentsTheme,
    typography as GDStypography,
    Theme,
    createMediaQueries,
    createTheme,
    useTheme as useGDSTheme,
} from '@greensight/gds';
import tokens from '@public/tokens.json';
import { global } from './themes/global';

const { colors, shadows } = tokens;
export type ColorsTheme = typeof colors;
export type TypographyParam = keyof typeof tokens.typography.styles;

export interface ExtendedTheme extends Omit<Theme, 'colors'> {
    components?: ComponentsTheme;
    colors?: ColorsTheme;
}

const settings: ExtendedTheme = {
    global,
};

const theme = createTheme({
    tokens,
    settings,
}) as ExtendedTheme;

const typography = (name: TypographyParam = 'm') => GDStypography(name, theme) as CSSObject;
const useTheme = () => useGDSTheme() as ExtendedTheme;

const {
    layout: { breakpoints },
} = tokens;

export const MEDIA_QUERIES = createMediaQueries(breakpoints);

export * from '@greensight/gds';
export { colors, shadows, theme, typography, useTheme };
