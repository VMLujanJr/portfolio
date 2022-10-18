import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';

const Navigation = (props) => {
    const classNames = (...classes) => {
        return classes.filter(Boolean).join(' ');
    };
    const {
        setAboutSelected,
        setPortfolioSelected,
    } = props;

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
        <header className='flex flex-col max-h-full w-screen'>
            <Menu as='div' className='laptop:flex bg-c-gray text-c-black justify-start relative p-2'>
                {({ open }) => (
                    <>
                        <Menu.Button className='inline-flex justify-start rounded-md border bg-white px-4 py-2 text-lg'>
                            <Bars3Icon className='w-14 h-14 hover:text-c-blue active:text-c-blue' aria-hidden='true' />
                        </Menu.Button>

                        {open && (
                            <Transition
                                as={Fragment}
                                enter='transition ease-out duration-100'
                                enterFrom='transform opacity-0 scale-95'
                                enterTo='transform opacity-100 scale-100'
                                leave='transition ease-in duration-75'
                                leaveFrom='transform opacity-100 scale-100'
                                leaveTo='transform opacity-0 scale-95'
                            >
                                <Menu.Items static className='ui-open:bg-c-blue bg-c-white laptop:bg-c-transparent laptop:relative absolute left-2.5 z-10 mt-2 w-auto origin-top-right rounded-md shadow-lg laptop:shadow-none laptop:rounded-none focus:outline-none'>
                                    <div className='font-League font-bold py-1 laptop:flex'>
                                        {menuItems.map((item) => (
                                            <Menu.Item key={item.href} as={Fragment}>
                                                {({ active }) => (
                                                    <a
                                                        href={item.href}
                                                        target={item.target}
                                                        rel={'noreferrer'}
                                                        onClick={item.function}
                                                        className={classNames(
                                                            active ? 'text-c-gray' : 'text-c-black',
                                                            'block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide laptop:text-c-white active:text-c-yellow'
                                                        )}
                                                    >
                                                        {item.label}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        )}
                    </>
                )}
            </Menu>                                         
        </header>
    )
};

export default Navigation;