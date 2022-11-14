import React from 'react';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Header from '../components/Header';

const FeaturedPage = () => {
    return (
        <>
            <div className='bg-c-alabaster'>
                <Header className='text-c-black' />
                <Featured />
                <Footer />
                <div className='flex justify-center'>&copy; {new Date().getFullYear()} All rights reserved.</div>
            </div>
        </>
    );
};

export default FeaturedPage;