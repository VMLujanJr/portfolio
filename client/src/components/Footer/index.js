import React from 'react';
import { contactInfo } from '../../utils/contactInfo.js';

const Footer = () => {
    
    return (
        <footer className='z-20'>
            <ul className='mt-10 flex justify-center items-center space-x-10 p-2'>
                {contactInfo.map((info, index) => (
                    <li key={index}>
                        <a href={info.href} target={info.target} rel={info.rel}>
                            <img src={info.src} alt={info.alt} className='hover:scale-110 w-6 h-6 tablet:w-10 tablet:h-10 laptop:w-12 laptop:h-12 desktop:w-14 desktop:h-14' />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;