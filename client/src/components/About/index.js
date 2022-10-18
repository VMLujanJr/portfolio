import React from 'react';

const About = () => {
    return (
        <section id='about' className='min-h-screen flex justify-center items-center px-2'>
            <div id='container' className='w-4/5 flex flex-col justify-center items-center'>
                <h1 className='z-10 animate-slider1 font-bold text-4xl laptop:text-7xl'>About</h1>
                <p className="z-10 animate-slider2 font-Nanum text-sm laptop:text-xl bg-c-yellow rounded-xl p-2 text-justify max-w-sm tablet:max-w-md laptop:max-w-lg">
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