import { Container } from '@greensight/gds';
import { FC, PropsWithChildren } from 'react';
import { typography } from 'src/scripts/gds/gds';
import { visuallyHiddenCss } from 'src/scripts/gds/themes/global';
import { ISectionProp } from 'src/types/types';

const Section: FC<PropsWithChildren<ISectionProp>> = props => {
    const { children, heading, levelHeading, className, isHidden = false } = props;
    const Tag = levelHeading as 'h1' | 'h2' | 'h3' | 'h4';
    if (heading) {
        return (
            <section className={className}>
                <Container>
                    <Tag css={isHidden ? visuallyHiddenCss : { ...typography(levelHeading) }}>{heading}</Tag>
                    {children}
                </Container>
            </section>
        );
    }
};

export default Section;
