import MenuIcon from '../components/MenuIcon';

export const menuItems = [
    {
        icon: <MenuIcon />,
        submenu: [
            {
                title: 'About',
                url: '/about',
                target: '_self',
                relation: 'no-refresher'
            },
            {
                title: 'Portfolio',
                url: '/portfolio',
                target: '_self',
                relation: 'no-refresher'
            }
        ]
    }
];