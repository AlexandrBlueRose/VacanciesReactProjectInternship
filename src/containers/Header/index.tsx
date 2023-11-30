import { Container, scale } from '@greensight/gds';
import { FC, PropsWithChildren } from 'react';
import { typography } from 'src/scripts/gds/gds';
import { roboto } from 'src/scripts/gds/themes/font';
import { IHeadingProp } from 'src/types/types';

const Header: FC<PropsWithChildren<IHeadingProp>> = props => {
    const { children, heading } = props;

    if (heading) {
        return (
            <header className={roboto.className} css={{ paddingTop: `${scale(8)}px`, paddingBottom: `${scale(6)}px` }}>
                <Container>
                    <h1
                        css={{
                            paddingBottom: `${scale(5)}px`,
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
