import React from 'react';
import NavigationBar from '../NavigationBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id='navContainer' className='inline-flex w-screen'>
                <NavigationBar className='z-50' />
                <Link href='/' className='z-0 text-c-white text-center text-4xl w-full'>Victor Lujan</Link>
            </div>
        </header>
    );
};

export default Header;