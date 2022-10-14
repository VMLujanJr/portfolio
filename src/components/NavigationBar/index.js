import React from 'react';
import MenuItems from '../MenuItems'; // component
import { menuItems } from '../../utils/menuItems.js'; // a specific .js file inside component

const NavigationBar = () => {
    return (
        <nav>
            <ul id='menuItems' className='text-c-red'>
                {menuItems.map((menu, index) => {
                    return <MenuItems items={menu} key={index} />
                })}
            </ul>
        </nav>
    );
};

export default NavigationBar;