import React from 'react';
import NavigationBar from '../NavigationBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id='navContainer' className='flex items-center w-screen'>
                <NavigationBar />
                <div className='text-center w-screen'>
                    <Link href='/' className='drop-shadow-3xl font-League font-extrabold text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl text-c-yellow'>Victor Lujan</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;