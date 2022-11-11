import React from 'react';
import Footer from '../components/Footer';

const NoMatchPage = () => {
    return (
        <>
            <div>
                Opps, we couldn't find that page.
            </div>
            <Footer />
            <div className='flex justify-center text-sm tablet:text-md laptop:text-lg desktop:text-xl'>&copy; {new Date().getFullYear()} All rights reserved.</div>
        </>
    );
};

export default NoMatchPage;