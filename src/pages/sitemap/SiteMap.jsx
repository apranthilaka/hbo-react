import { Link } from 'react-router-dom';
import { DefaultLayout } from '../../layouts/DefaultLayout';

export const SiteMap = () => {
    return (
        <div>
            <p> Site Map Page</p>
            <nav>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </div>
    );
};
