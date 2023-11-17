import { CSSObject } from '@emotion/core';
import { createFutureButtonWithTheme } from '@greensight/gds';
import { Size, Variant } from './enum';
import { BUTTON_THEMES } from './themes/basic';

function custonTypography(
    name:
        | 'buttonLg'
        | 'buttonMd'
        | 'buttonSm'
        | 'captionUppercase'
        | 'caption'
        | 'smallBold'
        | 'small'
        | 'bodyBold'
        | 'body'
        | 'subheading'
        | 'title'
        | 'headline'
        | 'h4'
        | 'h3'
        | 'h2'
        | 'h1'
): CSSObject {
    throw new Error(`Function not implemented. name: ${name}`);
}

const Button = createFutureButtonWithTheme<typeof Variant, typeof Size, any>(
    BUTTON_THEMES.basic,
    Variant.primary,
    Size.sm,
    custonTypography
);

export default Button;
