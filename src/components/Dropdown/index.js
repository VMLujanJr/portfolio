import React from 'react';

const Dropdown = ({ submenus }) => {
    return (
        <ul id='dropdown'>
            {submenus.map((submenu, index) => (
                <li key={index}>
                    <a
                        href={submenu.url}
                        target={submenu.target}
                        rel={submenu.relation}
                        /* onClick={item.function} */
                        className='hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide active:text-c-yellow'
                    >
                        {submenu.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;