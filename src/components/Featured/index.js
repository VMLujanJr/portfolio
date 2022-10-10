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
            alt: 'currex website',
            technologies: 'Markdown, JavaScript, HTML, CSS',
            image: CurrexImg
        },
        {
            id: '2',
            name: 'Slayers',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!',
            website: 'https://fierce-temple-92608.herokuapp.com/',
            alt: 'slayers website',
            technologies: 'Markdown, JavaScript, HTML, CSS',
            image: SlayersImg
        },
        {
            id: '3',
            name: 'DeepThoughts',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!',
            website: 'https://agile-chamber-28404.herokuapp.com/profile',
            alt: 'deepthoughts website',
            technologies: 'Markdown, JavaScript, HTML, CSS',
            image: DeepThoughtsImg
        }
    ];

    return (
        <section id='featured' className=''>
            <ul id='container' className='customViewHeight flex flex-col items-center'>
                {projectData.map(({ id, name, description, website, alt, technologies, image }) => (
                    <li key={id} className='max-w-xs flex-col flex justify-center items-center'>
                        <h2 className='flex text-4xl font-bold'>{name}</h2>
                        <a href={website} alt={alt} target='_blank' className=''>
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
                                className='flex my-2 p-1 ring-c-black ring-4 rounded-3xl'
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
                            className='laptop:relative w-4/5 laptop:right-32 laptop:top-28'
                        >
                            <p className='font-Nanum text-sm flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 laptop:max-w-xl'>
                                {description}
                            </p>
                            <div className='font-Nanum font-bold italic text-sm flex justify-center'>
                                {technologies}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Featured;