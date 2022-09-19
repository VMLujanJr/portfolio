import React, { useState } from 'react';
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
                <Resume onClose={ toggleResume } />
            )}
            <div id='container' className='League flex'>
                <div id='subcontainer'>
                    <a href='/'>
                        <img
                            src={require(`../../assets/images/thumbnails/currex.gif`)}
                            alt="logo"
                            className="w-100 h-100"
                        />
                    </a>
                </div>
                <nav id='subcontainer'>
                    <ul className='flex'>
                        <li>
                            <span onClick={() => {
                                setAboutSelected(true)
                                setPortfolioSelected(false)
                                setResumeSelected(false)
                            }}>About</span>
                        </li>
                        <li>
                            <span onClick={() => {
                                setAboutSelected(false)
                                setPortfolioSelected(true)
                                setResumeSelected(false)
                            }}>Portfolio</span>
                        </li>
                        <li>
                            <span onClick={() => {
                                toggleResume()
                            }}>Resume</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;