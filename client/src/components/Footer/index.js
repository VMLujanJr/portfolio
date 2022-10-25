import React from 'react';
import EmailLogo from '../../assets/images/logos/email.svg';
import GitHubLogo from '../../assets/images/logos/github.svg';
import LinkedInLogo from '../../assets/images/logos/linkedin.svg';

const Footer = () => {
    return (
        <footer className='sticky bottom-0 z-20 bg-c-yellow'>
            <ul className='flex flex-col items-start space-y-5 p-2'>
                <li>
                    <a href='mailto:vmlujanjr@outlook.com' target='_blank' rel='noreferrer'>
                        <img src={ EmailLogo } alt='email logo' className='hover:scale-110 w-[35px] h-[35px] tablet:w-[45px] tablet:h-[45px] laptop:w-[55px] laptop:h-[55px] desktop:w-[65px] desktop:h-[65px]' />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/VMLujanJr' target='_blank' rel='noreferrer'>
                        <img src={ GitHubLogo } alt='github logo' className='hover:scale-110 w-[35px] h-[35px]' />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/vmlujanjr/' target='_blank' rel='noreferrer'>
                        <img src={ LinkedInLogo } alt='linkedin logo' className='hover:scale-110 w-[35px] h-[35px]' />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;