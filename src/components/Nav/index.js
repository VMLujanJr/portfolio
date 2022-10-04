import React, { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
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
    const toggleResume = (resume) => {
        setIsResumeOpen(!isResumeOpen);
    };

    return (
        <header className='flex flex-col bg-vintage max-h-full'>
            {
                isResumeOpen && (
                    <Resume onClose={toggleResume} />
                )
            }
            <Menu as="div" className="lg:flex bg-c-gray text-c-black justify-start relative inline-block text-start p-2">
                <div className="">
                    <Menu.Button className="inline-flex justify-start rounded-md border bg-white px-4 py-2 text-lg font-medium text-gray-700 white-sm hover:bg-gray-50">
                        <Bars3Icon className="w-14 h-14 hover:text-c-blue active:text-c-blue" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={ Fragment }
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="bg-c-white lg:bg-c-transparent lg:relative absolute left-2.5 z-10 mt-2 w-auto origin-top-right rounded-md shadow-lg lg:shadow-none lg:rounded-none focus:outline-none">
                        <div className="font-League font-bold py-1 lg:flex">
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
                                            active ? 'text-c-gray' : 'text-c-black',
                                            'block px-4 py-2 text-xl animate-nav1-down lg:animate-nav1-slide'
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
                                            active ? 'text-c-gray' : 'text-c-black',
                                            'block px-4 py-2 text-xl animate-nav2-down lg:animate-nav2-slide'
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
                                            toggleResume(false)
                                        }}
                                        className={classNames(
                                            active ? 'text-c-gray' : 'text-c-black',
                                            'block px-4 py-2 text-xl animate-nav3-down lg:animate-nav3-slide'
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

export default Nav;