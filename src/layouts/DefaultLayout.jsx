import { useState } from 'react';
import { LeftMenu } from '../components/LeftMenu';
import { TopMenu } from '../components/TopMenu';
import styles from './default-layout.module.scss';
import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => setCollapsed((s) => !s);
    const expand = () => setCollapsed(false);

    return (
        <div
            className={`${styles.defaultLayout} ${
                collapsed ? styles.collapsedLayout : ''
            }`}
        >
            <TopMenu />
            <LeftMenu
                collapsed={collapsed}
                onLogoClick={expand}
                onToggle={toggleCollapsed}
            />
            <Outlet />
        </div>
    );
};
