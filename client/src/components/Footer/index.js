import React from 'react';
import { contactInfo } from '../../utils/contactInfo.js';

const Footer = () => {
    return (
        <footer className='sticky bottom-0 z-20'>
            <ul className='flex flex-col items-start space-y-5 p-2'>
                {contactInfo.map((info, index) => (
                    <li key={index}>
                        <a href={info.href} target={info.target} rel={info.rel}>
                            <img src={info.src} alt={info.alt} className='hover:scale-110 w-[35px] h-[35px] tablet:w-[45px] tablet:h-[45px] laptop:w-[55px] laptop:h-[55px] desktop:w-[65px] desktop:h-[65px]' />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    );
};

export default Footer;