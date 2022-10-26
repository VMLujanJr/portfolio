import React from 'react';
import MenuItems from '../MenuItems'; // component
import { menuItems } from '../../utils/menuItems.js'; // a specific .js file inside component

const NavigationBar = () => {
    return (
        <nav>
            <ul id='menuItems' className='p-2'>
                {/* .map thru menu Array */}
                {menuItems.map((menu, index) => {
                    
                    /* ICON SHOULD RENDER BY DEFAULT */
                    
                    /* send content to MenuItems via prop drill 'items={menu}', then return */
                    return <MenuItems items={menu} key={index} />
                })}
            </ul>
        </nav>
    );
};

export default NavigationBar;