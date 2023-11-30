import { OptionizedCSS, extractCSSOption, scale } from '@greensight/gds';
import { colors } from 'src/scripts/gds/gds';
import { Size, Variant } from '../enum';
import { InputTheme } from '../types';

const basicTheme: InputTheme<typeof Variant, typeof Size> = {
    button: state => {
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                padding: `${scale(1, true)}px ${scale(3, true)}px`,
                height: `${scale(6)}px`,
                border: `1px solid ${colors.grey400}`,
                borderRadius: `${scale(1, true)}px`,
                background: `${colors.white}`,
                color: `${colors.grey600}`,
                textAlign: `left`,
                width: '100%',
                marginTop: `${scale(1, true)}px`,
                ':focus': {
                    outline: 'none',
                    boxShadow: 'none',
                    border: `1px solid ${colors.blue}`,
                },
                ':invalid(:placeholder-shown)': {
                    borderColor: 'red',
                },
                ':valid:not(:placeholder-shown)': {
                    borderColor: 'green',
                },
            },
        };

        return {
            ...extractCSSOption(variant, state.variant),
        };
    },
    icon: state => {
        const sized: OptionizedCSS<typeof Size> = {
            md: {},

            xxxl: {},
        };
        const variant: OptionizedCSS<typeof Variant> = {
            primary: {
                display: 'none',
            },
        };

        return {
            ...extractCSSOption(sized, state.size),
            ...extractCSSOption(variant, state.variant),
        };
    },
};

export const INPUT_THEME = {
    basic: basicTheme,
};
