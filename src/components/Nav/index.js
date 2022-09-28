import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Resume from '../Resume';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Nav = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
    } = props;
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const toggleResume = () => {
        setIsResumeOpen(!isResumeOpen);
    };

    return (
        <header className='flex items-center'>
            {isResumeOpen && (
                <Resume onClose={ toggleResume } />
            )}
            <Menu as="div" className="relative inline-block text-left p-2">
                <div>
                    <Menu.Button className="inline-flex w-full items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                        <Bars3Icon className='w-14 h-14 hover:text-c-red active:text-c-red' aria-hidden='true' />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="font-League absolute left-2.5 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            setAboutSelected(true)
                                            setPortfolioSelected(false)
                                            setResumeSelected(false)
                                        }}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-2xl'
                                        )}
                                    >
                                        About
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            setAboutSelected(false)
                                            setPortfolioSelected(true)
                                            setResumeSelected(false)
                                        }}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-2xl'
                                        )}
                                    >
                                        Portfolio
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        onClick={() => {
                                            toggleResume()
                                        }}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-2xl'
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
            <div id='logo' className='flex w-full justify-center'>
                <a href='/'>
                    <img
                        src={require(`../../assets/images/thumbnails/currex.gif`)}
                        alt="logo"
                        className="w-20"
                        style={{ height: '100px', width: '100px' }}
                    />
                </a>
            </div>
        </header>
    )
};

export default Nav;