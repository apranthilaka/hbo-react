import { LeftMenu } from '../components/LeftMenu';
import { TopMenu } from '../components/TopMenu';
import styles from './default-layout.module.scss';
import { Outlet } from 'react-router-dom';

export const DefaultLayout = () => {
    return (
        <div className={styles.defaultLayout}>
            <TopMenu />
            <LeftMenu />
            <Outlet />
        </div>
    );
};
