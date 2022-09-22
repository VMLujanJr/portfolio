import React, { useState, useEffect } from 'react';
import Resume from '../Resume';

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
                <nav id='subcontainer' className='bg-c-yellow w-full font-League font-bold text-5xl'>
                    <ul className='flex justify-around'>
                        <li className='flex'>
                            <span
                                onClick={() => {
                                    setAboutSelected(true)
                                    setPortfolioSelected(false)
                                    setResumeSelected(false)
                                }}
                                className='animate-fade1'
                            >About</span>
                        </li>
                        <li className='flex'>
                            <span
                                onClick={() => {
                                    setAboutSelected(false)
                                    setPortfolioSelected(true)
                                    setResumeSelected(false)
                                }}
                                className='animate-fade2'
                            >Portfolio</span>
                        </li>
                        <li className='flex'>
                            <span
                                onClick={() => {
                                    toggleResume()
                                }}
                                className='animate-fade3'
                            >Resume</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;