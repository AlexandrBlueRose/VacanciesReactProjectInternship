export interface IHeadingProp {
    heading?: string;
    levelHeading?: number;
}

export type ISectionProp = Required<IHeadingProp>;
