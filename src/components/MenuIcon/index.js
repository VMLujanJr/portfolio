import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';

const MenuIcon = () => {
    return (
        <button type='button' className='inline-flex justify-start rounded-md border bg-white px-4 py-2 text-lg'>
            <Bars3Icon className='w-14 h-14 hover:text-c-blue active:text-c-blue' aria-hidden='true' />
        </button>
    );
};

export default MenuIcon;