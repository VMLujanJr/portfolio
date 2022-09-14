import React from 'react';

const Navigation = (props) => {
    const {
        resumeSelected,
        setResumeSelected
    } = props;

    return (
        <section>
            <div>
                <a href='/'>
                    Logo Here
                    <img src=''></img>
                </a>
            </div>
            <nav className="font-Josefin font-bold text-[20px] flex basis-3/4 justify-around items-center">
                <ul>
                    <li>
                        <span>About</span>
                    </li>
                    <li>
                        <span>Portfolio</span>
                    </li>
                    <li>
                        <span onClick={() => setResumeSelected(true)}>Resume</span>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Navigation;