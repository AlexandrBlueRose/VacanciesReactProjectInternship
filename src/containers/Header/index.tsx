import { Container, scale, typography } from '@greensight/gds';
import { FC, PropsWithChildren } from 'react';
import { IHeadingProp } from 'src/types/types';

const Header: FC<PropsWithChildren<IHeadingProp>> = props => {
    const { children, heading } = props;

    if (heading) {
        return (
            <header>
                <Container css={{ padding: '0 20px' }}>
                    <h1
                        css={{
                            padding: `${scale(8)}px 0 ${scale(6)}px 0`,
                            margin: 0,
                            ...typography('h1'),
                        }}
                    >
                        {heading}
                    </h1>
                    {children}
                </Container>
            </header>
        );
    }

    return <header>{children}</header>;
};

export default Header;
