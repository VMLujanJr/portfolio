import React from 'react';
import About from '../components/About';
/* import Hero from '../components/Hero'; */
import TechnologyList from '../components/TechnologyList';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
    return (
        <>
            <div className='bg-planet bg-fixed bg-no-repeat bg-center w-full h-full'>
                <Header />
                <About />
            </div>
            <TechnologyList />
            <Footer />
        </>
    );
};

export default AboutPage;