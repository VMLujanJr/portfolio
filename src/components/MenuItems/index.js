import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../Dropdown';

const MenuItems = ({ items }) => {
    let ref = useRef(); // access the DOM elements of the dropdown by passing a reference to the target node
    
    const [dropdown, setDropdown] = useState(Boolean); // Toggle Dropdown ON / OFF
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    /* const [onPageReload, setOnPageReload] = useState(Boolean); */

    /* if you click outside of the menu, the menu items will collapse */
    useEffect(() => {
        const handler = (event) => {

            /* I don't understand !ref.current.contains(event.target) */
            if (dimensions.width < 1024 && dropdown && ref.current && !ref.current.contains(event.target)) { // this fixed the click issue
                setDropdown(false); // this is what is turning it off
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);
        /* document.addEventListener('load', onPageReload); */ // we should create a handler;

        return () => {
            // cleanup the event listener
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown, dimensions]); // ...true or false...

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            });
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    useEffect(() => {
        if (dimensions.width >= 1024) {
            setDropdown(true);
        } else if (dimensions.width < 1024) {
            setDropdown(false);
        }
    }, [dimensions]);

    return (
        <li
            id='menuItem'
            ref={ref}
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
                        className='text-c-white laptop:hidden inline-flex justify-start rounded-md border px-4 py-2 text-lg'
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