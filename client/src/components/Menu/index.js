import React, { useState, Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';

const Menu = (props) => {
    const {
        setAboutSelected,
        setPortfolioSelected,
    } = props;

    const [isMenuToggled, setMenuToggle] = useState(true); // ALWAYS ON
    const toggleMenu = () => {
        setMenuToggle(toggle => !toggle);
    };
    const displayMenu = () => {
        (isMenuToggled === 'false' && window.innerWidth >= 1024) ? (
            toggleMenu()
        ) : (
            <p>nothing</p>
        )
    };

    const aboutHandler = () => {
        setAboutSelected(true);
        setPortfolioSelected(false);
    };

    const portfolioHandler = () => {
        setAboutSelected(false);
        setPortfolioSelected(true);
    };

    const menuItems = [
        { href: '#', label: 'About', target: '_self', function: aboutHandler },
        { href: '#', label: 'Portfolio', target: '_self', function: portfolioHandler },
        { href: 'https://drive.google.com/file/d/1BWV-UVg0WKeqpTIT8HTKvrcJ6F-1EHg-/view', label: 'Resume', target: '_blank' }
    ];

    return (
        <div className='laptop:flex bg-c-gray text-c-black justify-start relative p-2'>
            <nav className='flex max-h-full w-screen'>
                <button type='button' onClick={toggleMenu} className='laptop:hidden inline-flex justify-start rounded-md border bg-white px-4 py-2 text-lg'>
                    <Bars3Icon className='w-14 h-14 hover:text-c-blue active:text-c-blue' aria-hidden='true' />
                </button>
                {/* {isMenuToggled && ( */}
                    <Transition
                        as={Fragment}
                        show={true}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                    >
                        <div className='not-sr-only laptop:sr-only bg-c-white laptop:contents laptop:bg-c-transparent laptop:relative absolute top-24 laptop:top-0 left-2.5 z-10 mt-2 w-auto origin-top-right rounded-md shadow-lg laptop:shadow-none laptop:rounded-none focus:outline-none'>
                            <ul className='font-League font-bold py-1 laptop:flex'>
                                {menuItems.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            target={item.target}
                                            rel={'noreferrer'}
                                            onClick={item.function}
                                            className='text-c-black hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide laptop:text-c-white active:text-c-yellow'
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Transition>
            {/*     )
                } */}
            </nav>
        </div>
    )
};

export default Menu;