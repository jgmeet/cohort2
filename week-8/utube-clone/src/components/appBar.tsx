import { SearchBar } from "./searchBar"

export const AppBar = () => {
    return <div className="flex justify-between p-3">
        <div className="text-black text-lg inline-flex items-center pb-2 mr-2">
            Youtube
        </div>
        <SearchBar />
        <div className="text-black text-lg inline-flex items-center ml-2">Sign in</div>
    </div>
}