import { FC } from 'react';

const ErrorLabel: FC<{ errorMessage: string }> = prop => {
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
