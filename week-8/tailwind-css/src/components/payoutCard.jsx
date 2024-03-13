
export const PayoutCard = () => {
    return <div className="text-white">
        <div className="bg-sky-600 p-4 rounded-md">
            <div className="flex">
                <div className="pr-2"> Next Payout</div>
                <div className="inline-flex items-center pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <p className="text-bold">
                    Rs 22,349
                </p>
                <p className="flex justify-center items-center underline underline-offest-1 text-base font-medium">
                    xyz Orders  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" sroke-width="1.5" stroke="currentColor" class="w-6 h-6 pt-1 pb-1 stroke-2">
                    <path className="" stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </p>
            </div>
        </div>

        <div className="flex justify-between bg-sky-800 pl-4 pr-4 rounded-md">
            <div> Next Payment Date:</div>
            <div> Time</div>
        </div>
    </div>
}