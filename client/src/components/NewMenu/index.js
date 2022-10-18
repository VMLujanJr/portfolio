import React from 'react';

const NewMenu = () => {
    
    const menuKeyValues = [
        { href: '#', label: 'About', target: '_self', relation: 'No-Refresh' },
        { href: '#', label: 'Portfolio', target: '_self' },
        { href: 'https://drive.google.com/file/d/1BWV-UVg0WKeqpTIT8HTKvrcJ6F-1EHg-/view', label: 'Resume', target: '_blank' }
    ];

    return (
        <nav id='navigation' role='navigation'>
            <a href='navigation'>...myButton</a>
            <a href='#'>...hideMyButton</a>
            <ul>
                {/* ...create multiple list items. */}
                {menuKeyValues.map((mkv) => ( // mkv = menuKeyValues
                    <li key={mkv.href}>
                        <a
                            href={mkv.href}
                            target={mkv.target}
                            rel={'noreferrer'}
                            /* onClick={mkv.function} */
                            className='text-c-black hover:text-c-blue block px-4 py-2 text-xl animate-nav3-down laptop:animate-nav3-slide laptop:text-c-black active:text-c-yellow'
                        >
                            {mkv.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NewMenu;