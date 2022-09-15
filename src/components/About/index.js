import React from 'react';

const About = () => {
    return (
        <section id='about' className='min-h-screen flex items-center League'>
            <div id='container' className='w-full bg-c-black text-c-white leading-loose flex flex-col items-center'>
                <h1 className='font-Aboreto font-bold text-7xl'>Victor Lujan</h1>
                <p className="font-Nanum text-[28px] text-justify max-w-sm md:max-w-md lg:max-w-lg">
                    As a self-motivated software developer, I am searching for a reliable
                    company that can provide a safe learning environment with the potential to establish my career
                    in
                    software development.
                </p>
            </div>
        </section>
    );
};

export default About;