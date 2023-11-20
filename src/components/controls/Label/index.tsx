import { Layout } from '@greensight/gds';
import { FC } from 'react';
import Input from '../Input';

export type typeInput =
    | 'text'
    | 'textarea'
    | 'submit'
    | 'image'
    | 'reset'
    | 'hidden'
    | 'password'
    | 'file'
    | 'checkbox'
    | 'radio'
    | 'button'
    | 'tel'
    | 'email'
    | 'url';

interface LabelData {
    labelText: string;
    type: typeInput;
    placeholder?: string;
}

const Label: FC<LabelData> = props => {
    const { labelText, type, placeholder } = props;
    return (
        <Layout type="flex" direction="column">
            <Layout.Item>{labelText}</Layout.Item>
            <Layout.Item>
                <Input type={type} placeholder={placeholder} />
            </Layout.Item>
        </Layout>
    );
};

export default Label;
