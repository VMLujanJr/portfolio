import EmailLogo from '../assets/images/logos/email.svg';
import GitHubLogo from '../assets/images/logos/github.svg';
import LinkedInLogo from '../assets/images/logos/linkedin.svg';

export const contactInfo = [
    {
        href: 'mailto:vmlujanjr@outlook.com' ,
        target: '_blank',
        rel: 'noreferrer',
        src: <EmailLogo />,
        alt: 'email logo'
    },
    {
        href: 'https://github.com/VMLujanJr' ,
        target: '_blank',
        rel: 'noreferrer',
        src: <GitHubLogo />,
        alt: 'github logo'
    },
    {
        href: 'https://www.linkedin.com/in/vmlujanjr/' ,
        target: '_blank',
        rel: 'noreferrer',
        src: <LinkedInLogo />,
        alt: 'linkedin logo'
    },
];