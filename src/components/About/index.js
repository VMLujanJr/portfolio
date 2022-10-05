import React from 'react';

const About = () => {
    return (
        <section id='about' className='min-h-screen flex items-center px-6'>
            <div id='container' className='absolute w-full flex flex-col items-center'>
                <h1 className='z-10 animate-slider1 font-bold text-7xl'>Victor Lujan</h1>
                <p className="z-10 animate-slider2 font-Nanum text-xl bg-c-yellow rounded-xl p-3 text-justify max-w-sm md:max-w-md lg:max-w-lg">
                    As a self-motivated software developer, I am searching for a reliable
                    company that can provide a safe learning environment with the potential to establish my career
                    in
                    software development.
                </p>
                <span className='absolute animate-bounce left-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '250px', width: '250px' }}></span>
                <span className='absolute animate-bouncey right-10 z-0 flex justify-center bg-c-blue rounded-full' style={{ height: '200px', width: '200px' }}></span>
            </div>
        </section>
    );
};

export default About;