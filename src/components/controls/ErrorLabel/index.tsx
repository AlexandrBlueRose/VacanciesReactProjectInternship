import { FC } from 'react';

interface ErrorLabelProps {
    errorMessage: string;
}
const ErrorLabel: FC<ErrorLabelProps> = prop => {
    const { errorMessage } = prop;
    return (
        <div
            style={{
                color: 'red',
            }}
        >
            {errorMessage}
        </div>
    );
};

export default ErrorLabel;
