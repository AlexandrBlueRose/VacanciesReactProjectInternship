'use client';

import { Layout } from '@greensight/gds';
import { FC, PropsWithChildren } from 'react';
import { typography } from 'src/scripts/gds/gds';

interface LabelData {
    labelText: string;
    htmlFor?: string;
    className?: string | undefined;
}

const Label: FC<PropsWithChildren<LabelData>> = props => {
    const { labelText, htmlFor, children, className } = props;
    return (
        <Layout type="flex" direction="column" className={className}>
            <Layout.Item css={{ ...typography('xsMedium') }}>
                <label htmlFor={htmlFor || ''}>{labelText}</label>
                {children}
            </Layout.Item>
        </Layout>
    );
};

export default Label;
