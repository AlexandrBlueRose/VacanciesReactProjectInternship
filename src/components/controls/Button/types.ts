import { BaseThemeState, EnumLike, StyleDefinition } from '@greensight/gds';
import { SVGRIcon } from '@greensight/gds/types/src/types/Utils';
import { FC, ReactNode } from 'react';

export interface ButtonState {
    // скрыт ли текст кнопки
    hidden: boolean;
    // выключена ли кнопка
    disabled: boolean;
    // передан ли children
    hasChildren: boolean;
    // растягивать ли кнопку
    block: boolean;
    // иконка справа?
    iconAfter: boolean;
    // включено скругление иконки?
    rounded: boolean;
}

export type ButtonStateFull<V extends EnumLike, S extends EnumLike> = BaseThemeState<V, S> & ButtonState;

export interface ButtonTheme<V extends EnumLike, S extends EnumLike> {
    button: StyleDefinition<ButtonStateFull<V, S>>;
    icon: StyleDefinition<ButtonStateFull<V, S>>;
}

export interface ButtonProps<V extends EnumLike, S extends EnumLike>
    extends Partial<BaseThemeState<V, S, ButtonTheme<V, S>>>, // важный момент
        Partial<ButtonState> {
    // важный момент
    children?: ReactNode;
    Icon?: SVGRIcon | FC<any>;
    external?: boolean;
    // ...etc
}
