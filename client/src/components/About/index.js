import React from 'react';

const About = () => {
    return (
        <section id='about' className='min-h-screen flex justify-center items-center px-2'>
            <div id='container' className='w-4/5 flex flex-col justify-center items-center'>
                {/* <h1 className='z-10 animate-slider1 font-bold text-4xl text-c-white laptop:text-7xl'>About</h1> */}
                <p className="z-10 animate-slider2 font-ROM font-bold text-c-white text-2xl laptop:text-4xl rounded-xl p-2 text-justify max-w-sm tablet:max-w-md laptop:max-w-lg">
                    The professional web developer you've been hoping for.
                </p>
                {/* <span className='absolute animate-bounce left-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '250px', width: '250px' }}></span>
                <span className='absolute animate-bouncey right-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '200px', width: '200px' }}></span> */}
            </div>
        </section>
    );
};

export default About;