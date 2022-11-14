import React from 'react';
import NavigationBar from '../NavigationBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id='navContainer' className='flex items-center w-screen'>
                <NavigationBar />
                <div className='text-center w-screen'>
                    <Link
                    to='/'
                    target='_self'
                    rel='no-refresher'
                    className='font-League hover:text-c-blue active:text-c-yellow text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl'>Victor Lujan</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;