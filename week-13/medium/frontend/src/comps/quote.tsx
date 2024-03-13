import React from 'react';

export function Quote() {
    return <div className='flex items-center h-full lg:h-screen bg-gray-200 invisible md:visible'>
        <div className='mx-14'>
            <p className='font-semibold text-xl'>
                "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
            </p>
            <p className='font-semibold text-base mt-3'>Jules Winnfield</p>
            <p className='font-medium text-base text-gray-500'> CEO, Acme Inc</p>
        </div>
    </div>
}