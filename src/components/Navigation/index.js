import React, { useState, useEffect } from 'react';
import Resume from '../Resume';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Navigation = (props) => {
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
        <header id='Navigation'>
            {isResumeOpen && (
                <Resume onClose={toggleResume} />
            )}
            <div id='container' className='League flex items-center'>
                <div id='subcontainer' className=''>
                    <a href='/'>
                        <img
                            src={require(`../../assets/images/thumbnails/currex.gif`)}
                            alt="logo"
                            className="w-20"
                        />
                    </a>
                </div>
                <nav id='menu' className='bg-c-yellow w-full font-League font-bold text-5xl'>
                    <button type='button'><Bars3Icon className='w-14 h-14 hover:text-c-red active:text-' />dropdown</button>
                    <div className='hidden'>
                        <ul>
                            <li className='flex focus:bg-c-blue'>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setAboutSelected(true)
                                        setPortfolioSelected(false)
                                        setResumeSelected(false)
                                    }}
                                    className='animate-fade1 hover:text-c-blue active:text-c-white focus:underline'
                                >About</button>
                            </li>
                            <li className='flex'>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setAboutSelected(false)
                                        setPortfolioSelected(true)
                                        setResumeSelected(false)
                                    }}
                                    className='animate-fade2 hover:text-c-blue active:text-c-white focus:underline'
                                >Portfolio</button>
                            </li>
                            <li className='flex'>
                                <button
                                    type='button'
                                    onClick={() => {
                                        toggleResume()
                                    }}
                                    className='animate-fade3 hover:text-c-blue active:text-c-white focus:underline'
                                >Resume</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;