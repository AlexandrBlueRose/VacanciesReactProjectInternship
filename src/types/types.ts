import { SerializedStyles } from '@emotion/core';

export interface IHeadingProp {
    heading?: string;
}

export type ISectionProp = {
    levelHeading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    css?: SerializedStyles;
} & Required<IHeadingProp>;
