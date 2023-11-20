import { scale } from '@greensight/gds';
import { FC } from 'react';
import { colors } from 'src/scripts/gds/gds';
import { typeInput } from '../Label';

interface InputData {
    placeholder?: string;
    type: typeInput;
}

const Input: FC<InputData> = props => {
    const { placeholder, type } = props;
    return (
        <input
            type={type}
            placeholder={placeholder}
            css={{
                padding: `${scale(1, true)}px ${scale(3, true)}px`,
                height: `${scale(11, true) + 4}px`,
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
