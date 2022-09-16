import React from 'react';

const Intro = () => {
    return (
        <div className='min-h-screen bg-c-black text-c-white flex justify-center items-center League text-7xl font-bold'>
            MY TEXT
            <img
                src={ require(`../../assets/images/logo.gif`) }
                alt='logo'
            />
        </div>
    );
};

export default Intro;