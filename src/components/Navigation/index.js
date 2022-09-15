import React from 'react';

const Navigation = (props) => {
    const {
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
                            <span onClick={() => setResumeSelected(false)}>About</span>
                        </li>
                        <li>
                            <span>Portfolio</span>
                        </li>
                        <li>
                            <span onClick={() => setResumeSelected(true)}>Resume</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navigation;