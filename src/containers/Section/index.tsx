import { Container, typography } from '@greensight/gds';
import { FC, PropsWithChildren } from 'react';
import { ISectionProp } from 'src/types/types';

const Section: FC<PropsWithChildren<ISectionProp>> = props => {
    const { children, heading, levelHeading, css } = props;
    const Tag = levelHeading as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    if (heading) {
        return (
            <section css={css}>
                <Container>
                    <Tag css={{ ...typography(levelHeading) }}>{heading}</Tag>
                    {children}
                </Container>
            </section>
        );
    }
};

export default Section;
