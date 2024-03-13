
export const SearchBar = () => {
    return <div className="sm:w-48 lg:w-96 h-10 flex border border-gray-500 rounded-3xl p-1 pr-2 pl-3">
        <input placeholder="Search" className="w-full text-gray-500 border-none outline-none pl-1" required/>
        <button className=" font-bold outline-none pr-4 rounded">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </button>
    </div>
}