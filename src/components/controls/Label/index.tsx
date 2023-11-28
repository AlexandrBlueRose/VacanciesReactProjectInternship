'use client';

import { Layout } from '@greensight/gds';
import { FC, PropsWithChildren } from 'react';

interface LabelData {
    labelText: string;
    htmlFor?: string;
}

const Label: FC<PropsWithChildren<LabelData>> = props => {
    const { labelText, htmlFor, children } = props;
    return (
        <Layout type="flex" direction="column">
            <Layout.Item>
                <label htmlFor={htmlFor || ''}>{labelText}</label>
            </Layout.Item>
            <Layout.Item>{children}</Layout.Item>
        </Layout>
    );
};

export default Label;
