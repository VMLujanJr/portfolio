import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../Dropdown';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef(); // access the DOM elements of the dropdown by passing a reference to the target node

    /* if you click outside of the menu, the menu items will collapse */
    useEffect(() => {
        const handler = (event) => {
            /* I don't understand !ref.current.contains(event.target) */
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            // cleanup the event listener
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown]); // ...true or false...

    const onMouseEnter = () => {
        window.innerWidth >= 1024 && setDropdown(true); 
    };

    const onMouseLeave = () => {
        window.innerWidth >= 1024 && setDropdown(false);
    };

    return (
        <li
            id='menuItem'
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu && (
                <>
                    <button
                        type='button'
                        aria-haspopup='menu'
                        href={items.url}
                        target={items.target}
                        rel={items.relation}
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                        className='inline-flex justify-start rounded-md border bg-white px-4 py-2 text-lg'
                    >
                        {items.icon}
                    </button>
                    <Dropdown dropdown={dropdown} submenus={items.submenu} />
                </>
            )
            }
        </li>
    )
};

export default MenuItems;