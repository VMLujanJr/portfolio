import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
    return (
        <>
            <Header />
            <div className='relative h-screen flex justify-center items-center space-x-40'>
                <h2 className='font-League font-bold bg-c-blue text-5xl h-1/5 w-full flex justify-start items-center'>Hey, let's talk...</h2>
            </div>
            <Contact />
            <Footer />
            <div className='flex justify-center'>&copy; {new Date().getFullYear()} All rights reserved.</div>
        </>
    );
};

export default ContactPage;