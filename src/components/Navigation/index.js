import React from 'react';

const Navigation = (props) => {
    const {
        resumeSelected,
        setResumeSelected
    } = props;

    return (
        <header>
            <div>
                <a href='/'>
                    Logo Here
                    <img src='' alt=''></img>
                </a>
            </div>
            <nav className="font-Josefin font-bold text-[20px] flex basis-3/4 justify-around items-center">
                <ul>
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
        </header>
    );
};

export default Navigation;