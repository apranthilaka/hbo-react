import { DefaultLayout } from '../../layouts/DefaultLayout.jsx';
import { Link } from 'react-router-dom';
import styles from './dashboard.module.scss';

const DashboardTitle = () => {
    return <div className={styles.dashboardTitle}>dashboard Title</div>;
};

const DashboardCard = () => {
    const cardDetails = [
        { id: 1, title: 'Card 1', content: 'This is card 1' },
        { id: 2, title: 'Card 2', content: 'This is card 2' },
        { id: 3, title: 'Card 3', content: 'This is card 3' },
        { id: 4, title: 'Card 4', content: 'This is card 4' },
        { id: 5, title: 'Card 5', content: 'This is card 5' },
        { id: 6, title: 'Card 6', content: 'This is card 6' },
        { id: 7, title: 'Card 7', content: 'This is card 7' },
        { id: 8, title: 'Card 8', content: 'This is card 8' },
        { id: 9, title: 'Card 9', content: 'This is card 9' },
        { id: 10, title: 'Card 10', content: 'This is card 10' },
        { id: 11, title: 'Card 11', content: 'This is card 11' },
        { id: 12, title: 'Card 12', content: 'This is card 12' },
        { id: 13, title: 'Card 13', content: 'This is card 13' },
        { id: 14, title: 'Card 14', content: 'This is card 14' },
        { id: 15, title: 'Card 15', content: 'This is card 15' },
        { id: 16, title: 'Card 16', content: 'This is card 16' },
        { id: 17, title: 'Card 17', content: 'This is card 17' },
        { id: 18, title: 'Card 18', content: 'This is card 18' },
        { id: 19, title: 'Card 19', content: 'This is card 19' },
        { id: 20, title: 'Card 20', content: 'This is card 20' },
        { id: 21, title: 'Card 21', content: 'This is card 21' },
        { id: 22, title: 'Card 22', content: 'This is card 22' },
        { id: 23, title: 'Card 23', content: 'This is card 23' },
        { id: 24, title: 'Card 24', content: 'This is card 24' },
        { id: 25, title: 'Card 25', content: 'This is card 25' },
        { id: 26, title: 'Card 26', content: 'This is card 26' },
        { id: 27, title: 'Card 27', content: 'This is card 27' },
        { id: 28, title: 'Card 28', content: 'This is card 28' },
        { id: 29, title: 'Card 29', content: 'This is card 29' },
        { id: 30, title: 'Card 30', content: 'This is card 30' },
        { id: 31, title: 'Card 31', content: 'This is card 31' },
        { id: 32, title: 'Card 32', content: 'This is card 32' },
        { id: 33, title: 'Card 33', content: 'This is card 33' },
        { id: 34, title: 'Card 34', content: 'This is card 34' },
        { id: 35, title: 'Card 35', content: 'This is card 35' },
        { id: 36, title: 'Card 36', content: 'This is card 36' },
    ];
    return (
        <>
            {cardDetails.map((card) => (
                <div key={card.id} className={styles.dashboardCard}>
                    <div className={styles.dashboardCard__title}>
                        {card.title}
                    </div>
                    <div className={styles.dashboardCard__linkWrapper}>
                        <div className={styles.dashboardCard__link}>Link 1</div>
                        <div className={styles.dashboardCard__link}>Link 2</div>
                        <div className={styles.dashboardCard__link}>Link 3</div>
                    </div>
                </div>
            ))}
        </>
    );
};

const DashboardCardContainer = () => {
    return (
        <div className={styles.dashboardCardContainer}>
            <DashboardCard />
        </div>
    );
};

export const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <DashboardTitle />
            <DashboardCardContainer />
        </div>
    );
};
