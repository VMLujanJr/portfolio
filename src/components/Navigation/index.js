import React from 'react';

const Navigation = (props) => {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    return (
        <header id='Navigation'>
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
                                setAboutSelected(false)
                                setPortfolioSelected(false)
                                setResumeSelected(true)
                            }}>Resume</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;