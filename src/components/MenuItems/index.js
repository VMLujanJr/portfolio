import React, { useState } from 'react';
import Dropdown from '../Dropdown';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li id='menuItem'>
            {items.icon}
            {items.submenu ? (
                <>
                    <button
                        type='button'
                        aria-haspopup='menu'
                        href={items.url}
                        target={items.target}
                        rel={items.relation}
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                        /* onClick={item.function} */
                        className='hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide active:text-c-yellow'
                    >
                        {items.title}
                    </button>
                    <Dropdown dropdown={dropdown} submenus={items.submenu} />
                </>
            ) : (
                <p>HELLO</p>
            )
            }
        </li>
    )
};

export default MenuItems;