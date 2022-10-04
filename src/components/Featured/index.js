import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Featured = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    return (
        <section id='featured' className='font-League'>
            <ul id='container' className='flex flex-col'>
                <li className='min-h-screen flex justify-center items-center'>
                    <a href='https://vmlujanjr.github.io/currex/' alt='currex website' target='_blank'>
                        <img
                            data-aos='zoom-in'
                            data-aos-offset='0'
                            data-aos-duration='2000'
                            data-aos-easing='ease-out'
                            data-aos-delay=''
                            data-aos-anchor=''
                            data-aos-achor-placement='top-bottom'
                            data-aos-once='false'
                            src={ require('../../assets/images/thumbnails/currex.gif') }
                            alt='currex'
                            className='flex p-10'
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
                        className='relative right-32 top-28'
                    >
                        <h2 className='flex justify-end text-7xl font-bold'>Currex</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS
                        </div>
                    </div>
                </li>
                <li className='min-h-screen flex justify-center items-center'>
                    <a href='https://fierce-temple-92608.herokuapp.com/' alt='slayers website' target='_blank'>
                        <img
                            data-aos='zoom-in'
                            data-aos-offset='0'
                            data-aos-duration='2000'
                            data-aos-easing='ease-out'
                            data-aos-delay=''
                            data-aos-anchor=''
                            data-aos-achor-placement='top-bottom'
                            data-aos-once='false'
                            src={ require('../../assets/images/thumbnails/slayers.gif') }
                            alt='currex'
                            className='flex p-10'
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
                        className='relative right-32 top-28'
                    >
                        <h2 className='flex justify-end text-7xl font-bold'>Slayers</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS
                        </div>
                    </div>
                </li>
                <li className='min-h-screen flex justify-center items-center'>
                    <a href='https://agile-chamber-28404.herokuapp.com/profile' alt='deep thoughts website' target='_blank'>
                        <img
                            data-aos='zoom-in'
                            data-aos-offset=''
                            data-aos-duration='2000'
                            data-aos-easing='ease-out'
                            data-aos-delay=''
                            data-aos-anchor=''
                            data-aos-achor-placement='top-bottom'
                            data-aos-once='false'
                            src={ require('../../assets/images/thumbnails/deep-thoughts.gif') }
                            alt='currex'
                            className='flex p-10'
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
                        className='relative right-32 top-28'
                    >
                        <h2 className='flex justify-end text-7xl font-bold'>Deep Thoughts</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Featured;