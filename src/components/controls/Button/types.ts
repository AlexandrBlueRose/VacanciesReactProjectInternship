import { BaseThemeState, EnumLike, StyleDefinition } from '@greensight/gds';

export interface State {
    hidden: boolean;
    disabled: boolean;
    block: boolean;
    iconAfter: boolean;
    rounded: boolean;
}

export type ButtonStateFull<V extends EnumLike, S extends EnumLike> = BaseThemeState<V, S> & State;

export interface ButtonTheme<V extends EnumLike, S extends EnumLike> {
    button: StyleDefinition<ButtonStateFull<V, S>>;
    icon: StyleDefinition<ButtonStateFull<V, S>>;
}
