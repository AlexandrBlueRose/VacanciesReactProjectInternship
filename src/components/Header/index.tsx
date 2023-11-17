import { FC, PropsWithChildren } from 'react';
import { IHeadingProp } from 'src/types/types';

interface IHeaderProps extends IHeadingProp {
    children: PropsWithChildren;
    elementType?: keyof JSX.IntrinsicElements;
}

const Header: FC<PropsWithChildren<IHeaderProps>> = props => {
    const { children, heading, levelHeading, elementType } = props;
    if (heading) {
        return <header>{children}</header>;
    }
};

export default Header;
