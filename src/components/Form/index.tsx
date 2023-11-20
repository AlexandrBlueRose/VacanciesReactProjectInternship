import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import Label from '@components/controls/Label';
import { Layout, scale } from '@greensight/gds';
import { FC } from 'react';

interface FormControl {
    legend: string;
    description?: string;
}

const Form: FC<FormControl> = props => {
    const { legend, description } = props;
    return (
        <Layout
            type="flex"
            direction="column"
            align="center"
            css={{
                textAlign: 'center',
                marginBottom: `${scale(2)}px`,
                gap: `${scale(2)}px`,
            }}
        >
            <form css={{ marginBottom: `${scale(2)}px` }}>
                <Layout.Item>
                    <fieldset
                        css={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: `${scale(2)}px`,
                            width: '100%',
                            border: 'none',
                        }}
                    >
                        <legend>{legend}</legend>
                        <p>{description}</p>
                        <Label labelText="Your name" type="text" placeholder="Please introduce yourself" />
                        <Label labelText="Email" type="text" placeholder="ivanov@gmail.com" />
                        <Label labelText="Phone number" type="text" placeholder="+7 (123) 456 7891" />
                        <Label labelText="Comment" type="textarea" placeholder="Message text" />
                    </fieldset>
                </Layout.Item>
                <Layout.Item>
                    <Button variant={Variant.primary}>Send</Button>
                </Layout.Item>
            </form>
        </Layout>
    );
};

export default Form;
