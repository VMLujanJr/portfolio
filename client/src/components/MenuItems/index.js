import React, { useState, useEffect, useRef } from 'react';
import Dropdown from '../Dropdown';

const MenuItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(null);
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

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWeight
    });

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
        }
    });

    useEffect(() => {
            if (dimensions.width >= 1024) {
                setDropdown(true);
            } else if (dimensions.width < 1024) {
                setDropdown(false);
            }
    }, [dimensions]);

    /* useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && !dropdown) {
                setDropdown(true);
            } else if (window.innerWidth < 1024 && dropdown) {
                setDropdown(false);
            }
            console.log(`resized to: `, window.innerWidth, `x`, window.innerHeight);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }); */

    const onMouseEnter = () => {
        window.innerWidth < 1024 && setDropdown(true); 
    };

    const onMouseLeave = () => {
        window.innerWidth < 1024 && setDropdown(false);
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
                        className='laptop:hidden inline-flex justify-start rounded-md border bg-white px-4 py-2 text-lg'
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