'use client';

import Button from '@components/controls/Button';
import { Variant } from '@components/controls/Button/enum';
import ErrorLabel from '@components/controls/ErrorLabel';
import Input from '@components/controls/Input';
import Label from '@components/controls/Label';
import Legend from '@components/controls/Legend';
import { CSSObject } from '@emotion/core';
import { Layout, scale } from '@greensight/gds';
import { useFormik } from 'formik';
import { FC } from 'react';
import { typography } from 'src/scripts/gds/gds';
import * as Yup from 'yup';

interface FormControl {
    legend: string;
    description?: string;
}

const Form: FC<FormControl> = props => {
    const { legend, description } = props;

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            comment: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, 'Name is to short').max(15, 'Name is to long').required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            phone: Yup.string().min(16, 'Phone number is not valid').required('Phone required'),
            comment: Yup.string().max(200, 'Comment is to long'),
        }),
        onSubmit: values => {
            // eslint-disable-next-line no-alert
            alert(
                `Sent name: ${values.name}\nSent email: ${values.email}\nSent phone: ${values.phone}\nSent comment: ${values.comment}`
            );
        },
    });
    const labelStyle: CSSObject = {
        width: `clamp(${scale(35)}px, 100%, ${scale(75)}px)`,
        textAlign: 'start',
    };

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
            <form css={{ marginBottom: `${scale(2)}px`, ...labelStyle }} onSubmit={formik.handleSubmit}>
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
                        <Legend legend={legend} description={description} />
                        <Label htmlFor="name" labelText="Your name" css={labelStyle}>
                            <Input
                                type="text"
                                placeholder="Please enter name"
                                id="name"
                                name="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <ErrorLabel errorMessage={formik.errors.name} />
                            ) : null}
                        </Label>
                        <Label htmlFor="email" labelText="Email" css={labelStyle}>
                            <Input
                                type="text"
                                placeholder="ivanov@gmail.com"
                                id="email"
                                name="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <ErrorLabel errorMessage={formik.errors.email} />
                            ) : null}
                        </Label>
                        <Label htmlFor="phone" labelText="Phone number" css={labelStyle}>
                            <Input
                                type="text"
                                placeholder="+7 (123) 456 7891"
                                mask="+9 (999) 999 999"
                                id="phone"
                                name="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <ErrorLabel errorMessage={formik.errors.phone} />
                            ) : null}
                        </Label>
                        <Label htmlFor="comment" labelText="Comment" css={labelStyle}>
                            <Input
                                type="textarea"
                                placeholder="Message text"
                                id="comment"
                                name="comment"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.comment}
                            />
                            {formik.touched.comment && formik.errors.comment ? (
                                <ErrorLabel errorMessage={formik.errors.comment} />
                            ) : null}
                        </Label>
                    </fieldset>
                </Layout.Item>
                <Layout.Item css={{ textAlign: 'center' }}>
                    <Button variant={Variant.primary} type="submit" getTypographyCSS={() => typography('s')}>
                        Send
                    </Button>
                </Layout.Item>
            </form>
        </Layout>
    );
};

export default Form;
