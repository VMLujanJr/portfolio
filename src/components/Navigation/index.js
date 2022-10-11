import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Navigation = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
    } = props;

    return (
        <header className='flex flex-col max-h-full w-screen'>
            <Menu as='div' className='laptop:flex bg-c-gray text-c-black justify-start relative p-2'>
                <div className=''>
                    <Menu.Button className='inline-flex justify-start rounded-md border bg-white px-4 py-2 text-lg'>
                        <Bars3Icon className='w-14 h-14 hover:text-c-blue active:text-c-blue' aria-hidden='true' />
                    </Menu.Button>
                </div>

                <Transition
                    as={ Fragment }
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                >
                    <Menu.Items className='bg-c-white laptop:bg-c-transparent laptop:relative absolute left-2.5 z-10 mt-2 w-auto origin-top-right rounded-md shadow-lg laptop:shadow-none laptop:rounded-none focus:outline-none'>
                        <div className='font-League font-bold py-1 laptop:flex'>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='#'
                                        onClick={() => {
                                            setAboutSelected(true)
                                            setPortfolioSelected(false)
                                        }}
                                        className={ classNames(
                                            active ? 'text-c-gray' : 'text-c-black',
                                            'block px-4 py-2 text-xl animate-nav1-down laptop:animate-nav1-slide laptop:text-c-white active:text-c-yellow'
                                        )}
                                    >
                                        About
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href='#'
                                        onClick={() => {
                                            setAboutSelected(false)
                                            setPortfolioSelected(true)
                                        }}
                                        className={ classNames(
                                            active ? 'text-c-gray' : 'text-c-black',
                                            'block px-4 py-2 text-xl animate-nav2-down laptop:animate-nav2-slide laptop:text-c-white active:text-c-yellow'
                                        )}
                                    >
                                        Portfolio
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href={'https://drive.google.com/file/d/1BWV-UVg0WKeqpTIT8HTKvrcJ6F-1EHg-/view'}
                                        target={'_blank'}
                                        className={ classNames(
                                            active ? 'text-c-gray' : 'text-c-black',
                                            'block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide laptop:text-c-white active:text-c-yellow'
                                        )}
                                    >
                                        Resume
                                    </a>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </header >
    )
};

export default Navigation;