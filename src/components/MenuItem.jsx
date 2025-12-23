import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss';

// Use Google Material Symbols via a span with the right glyph name.
const Icon = ({ name, className }) => {
    // mapping menu icon keys to material symbol names
    const map = {
        home: 'home',
        settings: 'settings',
        clipboard: 'assignment',
        dashboard: 'dashboard',
        shield: 'shield',
        database: 'storage',
    };

    const glyph = map[name] || '';
    return (
        <span
            className={`material-symbols-outlined ${className || ''}`}
            aria-hidden
        >
            {glyph}
        </span>
    );
};
// (icon rendering handled above)

export const MenuItem = ({ item, collapsed }) => {
    const [open, setOpen] = useState(false);

    const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;

    return (
        <li className={styles.menuItem}>
            <div className={styles.itemRow}>
                <Link
                    to={item.to || '#'}
                    className={styles.itemLink}
                    aria-current={
                        window.location.pathname === item.to
                            ? 'page'
                            : undefined
                    }
                >
                    <span className={styles.iconWrap} aria-hidden>
                        <Icon name={item.icon} />
                    </span>
                    {!collapsed && (
                        <span className={styles.label}>{item.label}</span>
                    )}
                </Link>

                {hasChildren && (
                    <button
                        className={styles.chevButton}
                        onClick={() => setOpen((s) => !s)}
                        aria-expanded={open}
                        aria-controls={`sub-${item.id}`}
                        title={open ? 'Collapse' : 'Expand'}
                    >
                        <span className="material-symbols-outlined" aria-hidden>
                            {open ? 'expand_less' : 'chevron_right'}
                        </span>
                    </button>
                )}
            </div>

            {hasChildren && (
                <ul
                    id={`sub-${item.id}`}
                    className={`${styles.submenu} ${open ? styles.open : ''}`}
                    aria-hidden={!open}
                >
                    {item.children.map((c) => (
                        <li key={c.id} className={styles.submenuItem}>
                            <Link to={c.to} className={styles.submenuLink}>
                                {!collapsed ? c.label : c.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default MenuItem;
