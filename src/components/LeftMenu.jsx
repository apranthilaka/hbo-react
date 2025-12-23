import styles from './leftmenu.module.scss';
import menuStyles from './menu.module.scss';
import { Link } from 'react-router-dom';
import menuItems from '../data/menuItems';
import MenuItem from './MenuItem';

export const LeftMenu = ({ collapsed = false, onLogoClick, onToggle }) => {
    return (
        <aside
            className={`${styles.leftMenu} ${
                collapsed ? styles.collapsed : ''
            }`}
            aria-label="Primary"
        >
            <div className={styles.logoRow}>
                <button
                    className={styles.logoBtn}
                    onClick={onLogoClick}
                    aria-label="Logo - expand menu"
                    title="Expand menu"
                >
                    {/* Placeholder logo - replace with real logo SVG if available */}
                    <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden>
                        <circle cx="24" cy="24" r="20" fill="#cfe9e3" />
                        <path
                            d="M12 30c6-6 24-6 24-6"
                            stroke="#76a79f"
                            strokeWidth="3"
                            fill="none"
                        />
                    </svg>
                </button>

                <button
                    className={styles.collapseBtn}
                    onClick={onToggle}
                    aria-pressed={collapsed}
                    aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
                    title={collapsed ? 'Expand menu' : 'Collapse menu'}
                >
                    <span className="material-symbols-outlined" aria-hidden>
                        {collapsed ? 'chevron_right' : 'chevron_left'}
                    </span>
                </button>
            </div>

            <nav
                className={`${menuStyles.menuWrap} ${
                    collapsed ? menuStyles.collapsedMenu : ''
                }`}
            >
                <ul className={menuStyles.menuList}>
                    {menuItems.map((it) => (
                        <MenuItem key={it.id} item={it} collapsed={collapsed} />
                    ))}
                </ul>
            </nav>

            <div className={styles.footer}>
                {!collapsed && (
                    <div className={styles.copyright}>
                        Copyright © 2024 Holtara (UK) Limited. Incorporated and
                        registered in England and Wales.
                    </div>
                )}
            </div>
        </aside>
    );
};

export default LeftMenu;
