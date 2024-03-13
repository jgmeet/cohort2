import React from 'react';


export function Heading() {
    return <div className='flex justify-center'>
        <div className="mb-6 mt-48">
            <p className="font-bold text-2xl mb-2">Create an account</p>
            <p className="font-medium text-sm text-gray-500">Already have an account? <a className="font-medium text-gray-500 underline hover:text-gray-400 cursor-pointer">Login</a> </p>
        </div>
    </div>
}