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

// function customTypography(
//     name: 'xs' | 'xsMedium' | 's' | 'sMedium' | 'm' | 'mMedium' | 'l' | 'lMedium' | 'h4' | 'h3' | 'h2' | 'h1'
// ): CSSObject {
//     throw new Error(`Function not implemented. name: ${name}`);
// }

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
                width: '100%',
                marginTop: `${scale(1, true)}px`,
                ':focus': {
                    outline: 'none',
                    boxShadow: 'none',
                    border: `1px solid ${colors.blue}`,
                },
                ':invalid(:placeholder-shown)': {
                    borderColor: 'red',
                },
                ':valid:not(:placeholder-shown)': {
                    borderColor: 'green',
                },
            }}
        />
    );
};

// const InputRef = forwardRef(Input) as typeof Input;

// export const createSelectWithTheme = <V extends EnumLike, S extends EnumLike>(
//     defaultTheme: InputTheme<V, S>,
//     defaultVariant: V | keyof V,
//     defaultSize: S | keyof S
// ) => {
//     type InputReturn = ReturnType<typeof InputRef>;
//     const ThemedSelect = (({ theme = defaultTheme, variant = defaultVariant, size = defaultSize, ...props }, ref) => (
//         <InputRef theme={theme} variant={variant} size={size} {...props} />
//     )) as (props: InputData<V, S>, ref: Ref<HTMLButtonElement>) => InputReturn;
//     (ThemedSelect as any).displayName = 'Button';

//     return forwardRef(ThemedSelect) as typeof ThemedSelect;
// };

export default Input;
