import React from 'react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FeaturedPage = () => {
    return (
        <>
            <Header className='text-c-black' />
            <Featured />
            <Footer />
        </>
    );
};

export default FeaturedPage;