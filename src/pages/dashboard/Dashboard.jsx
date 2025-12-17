import { DefaultLayout } from '../../layouts/DefaultLayout.jsx';
import { Link } from 'react-router-dom';
import styles from './dashboard.module.scss';
export const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <DashboardTitle />
            <DashboardCardContainer />
        </div>
    );
};

const DashboardTitle = () => {
    return <div className={styles.dashboardTitle}>dashboard Title</div>;
};

const DashboardCard = () => {
    const cardDetails = [
        { id: 1, title: 'Card 1', content: 'This is card 1', type: 'gp' },
        { id: 2, title: 'Card 2', content: 'This is card 2', type: 'lp' },
        { id: 3, title: 'Card 3', content: 'This is card 3', type: 'cp' },
        { id: 4, title: 'Card 4', content: 'This is card 4', type: 'me' },
        { id: 5, title: 'Card 5', content: 'This is card 5', type: 'gp' },
        { id: 6, title: 'Card 6', content: 'This is card 6', type: 'lp' },
        { id: 7, title: 'Card 7', content: 'This is card 7', type: 'cp' },
        { id: 8, title: 'Card 8', content: 'This is card 8', type: 'me' },
        { id: 9, title: 'Card 9', content: 'This is card 9', type: 'gp' },
        { id: 10, title: 'Card 10', content: 'This is card 10', type: 'lp' },
        { id: 11, title: 'Card 11', content: 'This is card 11', type: 'cp' },
        { id: 12, title: 'Card 12', content: 'This is card 12', type: 'me' },
        { id: 13, title: 'Card 13', content: 'This is card 13', type: 'gp' },
        { id: 14, title: 'Card 14', content: 'This is card 14', type: 'lp' },
        { id: 15, title: 'Card 15', content: 'This is card 15', type: 'cp' },
        { id: 16, title: 'Card 16', content: 'This is card 16', type: 'me' },
        { id: 17, title: 'Card 17', content: 'This is card 17', type: 'gp' },
        { id: 18, title: 'Card 18', content: 'This is card 18', type: 'lp' },
        { id: 19, title: 'Card 19', content: 'This is card 19', type: 'cp' },
        { id: 20, title: 'Card 20', content: 'This is card 20', type: 'me' },
        { id: 21, title: 'Card 21', content: 'This is card 21', type: 'gp' },
        { id: 22, title: 'Card 22', content: 'This is card 22', type: 'lp' },
        { id: 23, title: 'Card 23', content: 'This is card 23', type: 'cp' },
        { id: 24, title: 'Card 24', content: 'This is card 24', type: 'me' },
        { id: 25, title: 'Card 25', content: 'This is card 25', type: 'gp' },
        { id: 26, title: 'Card 26', content: 'This is card 26', type: 'lp' },
        { id: 27, title: 'Card 27', content: 'This is card 27', type: 'cp' },
        { id: 28, title: 'Card 28', content: 'This is card 28', type: 'me' },
        { id: 29, title: 'Card 29', content: 'This is card 29', type: 'gp' },
        { id: 30, title: 'Card 30', content: 'This is card 30', type: 'lp' },
        { id: 31, title: 'Card 31', content: 'This is card 31', type: 'cp' },
        { id: 32, title: 'Card 32', content: 'This is card 32', type: 'me' },
        { id: 33, title: 'Card 33', content: 'This is card 33', type: 'gp' },
        { id: 34, title: 'Card 34', content: 'This is card 34', type: 'lp' },
        { id: 35, title: 'Card 35', content: 'This is card 35', type: 'cp' },
        { id: 36, title: 'Card 36', content: 'This is card 36', type: 'me' },
    ];
    return (
        <>
            {cardDetails.map((card) => {
                const iconModifier = `dashboardCard__title__icon--${card.type}`;
                const iconClass = `${styles.dashboardCard__title__icon} ${
                    styles[iconModifier] || ''
                }`;
                return (
                    <div key={card.id} className={styles.dashboardCard}>
                        <div className={styles.dashboardCard__title}>
                            <div
                                className={iconClass}
                                role="img"
                                aria-label={`${card.type} icon`}
                            >
                                {card.title?.charAt(0) ?? '•'}
                            </div>
                            <div
                                className={styles.dashboardCard__title__heading}
                            >
                                {card.title}
                            </div>
                        </div>

                        <div className={styles.dashboardCard__linkWrapper}>
                            <div className={styles.dashboardCard__link}>
                                Link 1
                            </div>
                            <div className={styles.dashboardCard__link}>
                                Link 2
                            </div>
                            <div className={styles.dashboardCard__link}>
                                Link 3
                            </div>
                        </div>
                    </div>
                );
            })}
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
