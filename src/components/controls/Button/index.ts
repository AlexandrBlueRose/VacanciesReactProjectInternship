import { CSSObject } from '@emotion/core';
import { createFutureButtonWithTheme } from '@greensight/gds';
import { Size, Variant } from './enum';
import { BUTTON_THEMES } from './themes/basic';

function customTypography(
    name: 'xs' | 'xsMedium' | 's' | 'sMedium' | 'm' | 'mMedium' | 'l' | 'lMedium' | 'h4' | 'h3' | 'h2' | 'h1'
): CSSObject {
    throw new Error(`Function not implemented. name: ${name}`);
}

const Button = createFutureButtonWithTheme<typeof Variant, typeof Size, any>(
    BUTTON_THEMES.basic,
    Variant.primary,
    Size.sm,
    customTypography
);

export default Button;
