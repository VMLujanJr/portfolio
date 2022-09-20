import React, { useState, useEffect } from 'react';
import Resume from '../Resume';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navigation = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);
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
            <div
                id='container'
                data-aos='fade-left'
                data-aos-offset=''
                data-aos-duration='2000'
                data-aos-easing='ease-out'
                data-aos-delay=''
                data-aos-anchor=''
                data-aos-achor-placement='top-bottom'
                data-aos-once='false'
                className='League flex'
            >
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