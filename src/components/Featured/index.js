import React from 'react';

const Featured = () => {
    return (
        <section id='featured' className='League min-h-screen'>
            <ul id='container' className='bg-c-yellow flex flex-col space-y-48'>
                <li className='bg-c-blue min-h-screen flex justify-center items-center'>
                    <img
                        src={require('../../assets/images/thumbnails/currex.gif')}
                        alt='currex'
                        className='flex p-10'
                    ></img>
                    <div className='relative right-32 top-28'>
                        <h2 className='flex justify-end text-7xl font-bold'>Currex</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS
                        </div>
                    </div>
                </li>
                <li className='bg-c-blue min-h-screen flex justify-center items-center'>
                    <img
                        src={require('../../assets/images/thumbnails/currex.gif')}
                        alt='currex'
                        className='flex p-10'
                    ></img>
                    <div className='relative right-32 top-28'>
                        <h2 className='flex justify-end text-7xl font-bold'>Currex</h2>
                        <p className='flex flex-wrap text-justify bg-c-yellow rounded-lg p-3 max-w-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laboriosam, ad facere assumenda dolorum voluptates facilis illo, minima quisquam cupiditate ipsum nemo! Explicabo eos, id quod ea corporis quisquam asperiores!
                        </p>
                        <div className='flex justify-center'>
                            JavaScript, HTML, CSS
                        </div>
                    </div>
                </li>
                <li className='bg-c-blue min-h-screen flex justify-center items-center'>
                    <img
                        src={require('../../assets/images/thumbnails/currex.gif')}
                        alt='currex'
                        className='flex p-10'
                    ></img>
                    <div className='relative right-32 top-28'>
                        <h2 className='flex justify-end text-7xl font-bold'>Currex</h2>
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