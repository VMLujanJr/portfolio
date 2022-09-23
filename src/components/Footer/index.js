import React from 'react';
import EmailLogo from '../../assets/images/logos/email.svg';
import GitHubLogo from '../../assets/images/logos/github.svg';
import LinkedInLogo from '../../assets/images/logos/linkedin.svg';

const Footer = () => {
    return (
        <footer className=''>
            <ul className='flex flex-col space-y-5 bg-c-blue'>
                <li>
                    <a href='mailto:vmlujanjr@outlook.com'>
                        <img src={EmailLogo} alt='email logo' className='hover:scale-110' style={{ width: '54px', height: '54px' }} />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/VMLujanJr' target='_blank'>
                        <img src={GitHubLogo} alt='github logo' className='hover:scale-110' style={{ width: '54px', height: '54px' }} />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/vmlujanjr/' target='_blank'>
                        <img src={LinkedInLogo} alt='linkedin logo' className='hover:scale-110' style={{ width: '54px', height: '54px' }} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;