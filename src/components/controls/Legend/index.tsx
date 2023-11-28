'use client';

import { FC } from 'react';
import { typography } from 'src/scripts/gds/gds';

interface LegendProps {
    legend: string;
    description?: string;
}

const Legend: FC<LegendProps> = props => {
    const { legend, description } = props;
    return (
        <>
            <legend css={{ ...typography('h2'), margin: '0 auto' }}>{legend}</legend>
            <p css={{ ...typography('l') }}>{description}</p>
        </>
    );
};

export default Legend;
