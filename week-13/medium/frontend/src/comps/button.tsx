import React from 'react';

interface inp {
    label: string
}

export function Button({label}: inp) {
    return <div>
        <button type="button" className="mt-4 w-full text-white bg-[#050708] hover:bg-[#050708]/80 focus:outline-none font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{label}</button>
    </div>
}