import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200
        });
    }, []);

    return (
        <section id='about' className='min-h-screen flex items-center League'>
            <div
                data-aos='fade-left'
                data-aos-offset=''
                data-aos-duration='2000'
                data-aos-easing='ease-out'
                data-aos-delay=''
                data-aos-anchor=''
                data-aos-achor-placement='top-bottom'
                data-aos-once='false'
                id='container' className='w-full bg-c-black text-c-white leading-loose flex flex-col items-center'
            >
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