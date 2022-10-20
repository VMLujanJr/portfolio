import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ submenus, dropdown }) => {
    console.log(submenus, dropdown, 'what the fukc?')
    return (
        <ul id='dropdown' className={`${dropdown ? 'inline' : 'hidden'}`}>
            {submenus.map((submenu, index) => (
                <li key={index}>
                    <Link
                        to={submenu.url}
                        target={submenu.target}
                        rel={submenu.relation}
                        className='hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide active:text-c-yellow'
                    >
                        {submenu.title}
                    </Link>
                </li>
            ))}
            <li>
                <a href='https://drive.google.com/file/d/1BWV-UVg0WKeqpTIT8HTKvrcJ6F-1EHg-/view' target='_blank' rel='noreferrer' className='hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide active:text-c-yellow'>Resume</a>
            </li>
        </ul>
    );
};

export default Dropdown;