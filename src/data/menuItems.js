const menuItems = [
    {
        id: 'home',
        label: 'Home',
        to: '/',
        icon: 'home',
    },
    {
        id: 'dashboard',
        label: 'Dashboard',
        to: '/dashboard',
        icon: 'dashboard',
    },
    {
        id: 'setup',
        label: 'Setup',
        to: '/setup',
        icon: 'settings',
        children: [
            { id: 'setup-org', label: 'Organisation', to: '/setup/org' },
            { id: 'setup-users', label: 'Users', to: '/setup/users' },
        ],
    },
    {
        id: 'assignment',
        label: 'Assignment',
        to: '/assignment',
        icon: 'clipboard',
    },
    {
        id: 'admin',
        label: 'System admin',
        to: '/admin',
        icon: 'shield',
    },
    {
        id: 'data',
        label: 'Data',
        to: '/data',
        icon: 'database',
    },
];

export default menuItems;
