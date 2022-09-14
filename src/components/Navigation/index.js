import React from 'react';

function Navigation() {
    return (
        <section>
            <div>
                <a href='/'>
                    <img src=''></img>
                </a>
            </div>
            <nav className="font-Josefin font-bold text-[20px] flex basis-3/4 justify-around items-center">
                <div className="w-full h-20">LOGO HERE</div>
                <a href="#about">
                    <span>About</span>
                </a>
                <a href="#portfolio">
                    <span>Portfolio</span>
                </a>
                <a href="#resume">
                    <span>Resume</span>
                </a>
            </nav>
        </section>
    );
};

export default Navigation;