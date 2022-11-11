import React from 'react';
import BootstrapLogo from '../../assets/technologies/logos/bootstrap.svg';
import CSS3Logo from '../../assets/technologies/logos/css3.svg';
import ChromeDevToolsLogo from '../../assets/technologies/logos/chrome-devtools.svg';
import ExpressLogo from '../../assets/technologies/logos/express.svg';
import GitLogo from '../../assets/technologies/logos/git.svg';
import HTML5Logo from '../../assets/technologies/logos/html5.svg';
import JavaScriptLogo from '../../assets/technologies/logos/javascript.svg';
import jQueryLogo from '../../assets/technologies/logos/jquery.svg';
import MongoDBLogo from '../../assets/technologies/logos/mongodb.svg';
import NodeLogo from '../../assets/technologies/logos/node.svg';
import ReactLogo from '../../assets/technologies/logos/react.svg';
import TailwindCSSLogo from '../../assets/technologies/logos/tailwindcss.svg';
import MarkdownLogo from '../../assets/technologies/logos/markdown.svg';
import MySQLLogo from '../../assets/technologies/logos/mysql.svg';

const data = [
    {
        id: '1',
        name: 'Bootstrap',
        website: 'https://getbootstrap.com/',
        image: BootstrapLogo
    },
    {
        id: '2',
        name: 'CSS3',
        website: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        image: CSS3Logo
    },
    {
        id: '3',
        name: 'ChromeDevTools',
        website: 'https://developer.chrome.com/docs/devtools/',
        image: ChromeDevToolsLogo
    },
    {
        id: '4',
        name: 'Express',
        website: 'https://expressjs.com/',
        image: ExpressLogo
    },
    {
        id: '5',
        name: 'Git',
        website: 'https://git-scm.com/',
        image: GitLogo
    },
    {
        id: '6',
        name: 'HTML5',
        website: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        image: HTML5Logo
    },
    {
        id: '7',
        name: 'JavaScript',
        website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        image: JavaScriptLogo
    },
    {
        id: '8',
        name: 'jQuery',
        website: 'https://jquery.com/',
        image: jQueryLogo
    },
    {
        id: '9',
        name: 'MongoDB',
        website: 'https://www.mongodb.com/',
        image: MongoDBLogo
    },
    {
        id: '10',
        name: 'Node',
        website: 'https://nodejs.org/en/',
        image: NodeLogo
    },
    {
        id: '11',
        name: 'React',
        website: 'https://reactjs.org/',
        image: ReactLogo
    },
    {
        id: '12',
        name: 'TailwindCSS',
        website: 'https://tailwindcss.com/',
        image: TailwindCSSLogo
    },
    {
        id: '13',
        name: 'Markdown',
        website: 'https://www.markdownguide.org/',
        image: MarkdownLogo
    },
    {
        id: '14',
        name: 'MySQL',
        website: 'https://www.mysql.com/',
        image: MySQLLogo
    },
];

const TechnologyList = () => {
    return (
        <section className='space-y-10 flex flex-col justify-center items-center'>
            <h2 className='mt-10 font-bold text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl'>Technologies</h2>
            <div className='w-4/5 grid grid-cols-3 place-items-center gap-5 max-w-xl'>
                {data.map(({ id, name, website, image }) => (
                    <div key={ id } className=''>
                        <a href={ website } alt={ name } target='_blank' rel='noreferrer'>
                            <img
                                key={ id }
                                src={ image }
                                alt={ name }
                                className='w-[50px] h-[50px] laptop:w-[100px] laptop:h-[100px]'
                            />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechnologyList;