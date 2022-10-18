import React from 'react';
import About from '../components/About';
import Hero from '../components/Hero';
import TechnologyList from '../components/TechnologyList';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <TechnologyList />
        </>
    );
};

export default Home;