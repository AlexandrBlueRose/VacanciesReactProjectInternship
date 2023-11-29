import { BaseThemeState, EnumLike, StyleDefinition } from '@greensight/gds';

export interface State {
    disabled: boolean;
    block: boolean;
}

export type InputStateFull<V extends EnumLike, S extends EnumLike> = BaseThemeState<V, S> & State;

export interface InputTheme<V extends EnumLike, S extends EnumLike> {
    button: StyleDefinition<InputStateFull<V, S>>;
    icon: StyleDefinition<InputStateFull<V, S>>;
}
