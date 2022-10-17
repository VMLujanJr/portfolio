import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul id='dropdown' className={`${dropdown ? 'inline' : 'hidden'}`}>
            {submenus.map((submenu, index) => (
                <li key={index}>
                    <Link
                        href={submenu.url}
                        target={submenu.target}
                        rel={submenu.relation}
                        className='hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide active:text-c-yellow'
                    >
                        {submenu.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;