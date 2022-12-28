import React from 'react';

const About = () => {
    return (
        <section id='about' className='min-h-screen-80 flex justify-center items-center px-2'>
            <div id='container' className='w-4/5 flex flex-col justify-center items-center'>
                {/* <h1 className='z-10 animate-slider1 font-bold text-4xl text-c-white laptop:text-7xl'>About</h1> */}
                <p className="z-10 animate-slider2 font-ROM font-bold text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl rounded-xl p-2 max-w-sm tablet:max-w-md laptop:max-w-lg desktop:max-w-xl">
                    A professional web developer you can count on
                </p>
                {/* <span className='absolute animate-bounce left-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '250px', width: '250px' }}></span>
                <span className='absolute animate-bouncey right-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '200px', width: '200px' }}></span> */}
            </div>
        </section>
    );
};

export default About;