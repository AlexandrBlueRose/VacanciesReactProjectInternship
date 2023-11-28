import { scale } from '@greensight/gds';
import { ChangeEventHandler, FC, FocusEventHandler } from 'react';
import InputMask from 'react-input-mask';
import { colors } from 'src/scripts/gds/gds';

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
interface InputData {
    placeholder?: string;
    type: typeInput;
    id?: string;
    name?: string;
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
    value?: string;
    mask?: string | (string | RegExp)[];
}

const Input: FC<InputData> = props => {
    const { placeholder, type, id, name, onBlur, onChange, value, mask } = props;
    return (
        <InputMask
            mask={mask || ''}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            value={value}
            placeholder={placeholder}
            css={{
                padding: `${scale(1, true)}px ${scale(3, true)}px`,
                height: `${scale(6)}px`,
                border: `1px solid ${colors.grey400}`,
                borderRadius: `${scale(1, true)}px`,
                background: `${colors.white}`,
                color: `${colors.grey600}`,
                textAlign: `left`,
            }}
        />
    );
};

export default Input;
