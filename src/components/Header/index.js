import React from 'react';
import NavigationBar from '../NavigationBar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div id='navContainer' className='inline-flex'>
                <NavigationBar />
                <Link href='/'>Victor Lujan</Link>
            </div>
        </header>
    );
};

export default Header;