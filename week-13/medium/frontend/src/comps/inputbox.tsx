import React from 'react';

interface inp {
    label: string,
    placeholder: string
}

export function InputBox({label, placeholder}: inp) {
    return <div className='bg-white mb-2'>
        <p className='font-medium text-md mb-1'> {label} </p>
        <input className='h-7 w-full text-md text-slate-500 px-2 py-1 border border-gray-200 rounded mb-2' placeholder={placeholder} />
    </div>
}