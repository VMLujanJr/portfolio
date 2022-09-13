import React from 'react';

function Navigation() {
    return (
        <nav className="font-Josefin font-bold text-[20px] flex basis-3/4 justify-around items-center">
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
    );
};

export default Navigation;