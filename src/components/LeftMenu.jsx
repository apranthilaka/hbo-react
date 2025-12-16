import styles from './leftmenu.module.scss';
import { Link } from 'react-router-dom';

export const LeftMenu = () => {
    return (
        <>
            <div className={styles.leftMenu}>
                <nav>
                    <Link to="/">Sitemap</Link>
                </nav>
                <nav>
                    <Link to="/dashboard">Dashboard</Link>
                </nav>
            </div>
        </>
    );
};
