import Card from '@components/Card';
import { Layout, scale } from '@greensight/gds';
import { FC } from 'react';

const CardList: FC = () => (
    <Layout type="flex" direction="column" css={{ rowGap: `${scale(4)}px` }}>
        <Layout.Item>
            <Card />
        </Layout.Item>
    </Layout>
);

export default CardList;
