import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CurrexImg from '../../assets/images/thumbnails/currex.gif';
import SlayersImg from '../../assets/images/thumbnails/slayers.gif';
import DeepThoughtsImg from '../../assets/images/thumbnails/deep-thoughts.gif';

const Featured = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    const projectData = [
        {
            id: '1',
            name: 'Currex',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!',
            website: 'https://vmlujanjr.github.io/currex/',
            github: 'https://github.com/VMLujanJr/currex',
            alt: 'currex website',
            technologies: 'Markdown, JavaScript, HTML, CSS',
            image: CurrexImg
        },
        {
            id: '2',
            name: 'Slayers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!',
            website: 'https://fierce-temple-92608.herokuapp.com/',
            github: 'https://github.com/VMLujanJr/mini-factory',
            alt: 'slayers website',
            technologies: 'Markdown, JavaScript, HTML, CSS',
            image: SlayersImg
        },
        {
            id: '3',
            name: 'DeepThoughts',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!',
            website: 'https://agile-chamber-28404.herokuapp.com/profile',
            github: 'https://github.com/VMLujanJr/deep-thoughts',
            alt: 'deepthoughts website',
            technologies: 'Markdown, JavaScript, HTML, CSS',
            image: DeepThoughtsImg
        }
    ];

    return (
        <section id='featured' className=''>
            <ul id='container' className='customViewHeight flex flex-col items-center divide-y-2 divide-c-gray'>
                {projectData.map(({ id, name, description, website, github, alt, technologies, image }) => (
                    <li key={id} className='flex flex-col justify-center items-center max-w-xs tablet:max-w-md laptop:max-w-xl desktop:max-w-2xl'>
                        <h2 className='font-bold flex text-4xl tablet:text-5xl laptop:text-6xl desktop:text-7xl'>{name}</h2>
                        <div className='flex flex-col justify-center items-center laptop:relative'>
                            <a href={website} alt={alt} target='_blank' rel='noreferrer'>
                                <img
                                    data-aos='zoom-in'
                                    data-aos-offset='0'
                                    data-aos-duration='2000'
                                    data-aos-easing='ease-out'
                                    data-aos-delay=''
                                    data-aos-anchor=''
                                    data-aos-achor-placement='top-bottom'
                                    data-aos-once='false'
                                    src={image}
                                    alt={alt}
                                    className='flex my-2 p-1 ring-c-black hover:ring-c-yellow ring-4 rounded-3xl'
                                ></img>
                            </a>
                            <div
                                data-aos='fade-left'
                                data-aos-offset=''
                                data-aos-duration='2000'
                                data-aos-easing='ease-out'
                                data-aos-delay=''
                                data-aos-anchor=''
                                data-aos-achor-placement='top-bottom'
                                data-aos-once='false'
                                className='w-4/5 laptop:absolute laptop:-bottom-24 laptop:-left-24'
                            >
                                <div className='relative'>
                                    <p className='font-Nanum text-sm tablet:text-md laptop:text-lg desktop:text-xl flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 laptop:max-w-xl drop-shadow-shade'>
                                        {description}
                                    </p>
                                    <a href={github} alt='github link' target='_blank' rel='noreferrer' className='absolute -bottom-2 -right-2 bg-c-tblack text-c-white hover:font-bold active:text-c-yellow rounded-md p-1 drop-shadow-shade'>GitHub</a>
                                </div>
                                <div className='font-Nanum font-bold italic text-sm tablet:text-md laptop:text-lg desktop:text-xl flex justify-center'>
                                    {technologies}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Featured;