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
                /* function: aboutHandler */
            },
            {
                title: 'Portfolio',
                url: '/portfolio',
                target: '_self',
                relation: 'no-refresher'
                /* function: portfolioHandler */
            },
            {
                title: 'Resume',
                url: 'https://drive.google.com/file/d/1BWV-UVg0WKeqpTIT8HTKvrcJ6F-1EHg-/view',
                target: '_blank',
                relation: 'noreferrer'
            }
        ]
    }
];