
export function VideoCard(props: any) {
    return <div className="p-3 cursor-pointer">
        <img className="rounded-lg" src={props.image} />
        <div className="grid grid-cols-12 pt-2">
            <div>
                <img className="text-black rounded-full w-20 h-10" src={props.thumbImage} />
            </div>
            <div className="col-span-11 pl-5 pr-4">
                <div className="truncate text-black">
                    {props.title}
                </div>
                <div className="text-gray-500 text-sm">
                    {props.author}
                </div>
                <div className="text-gray-500 text-sm">
                    {props.views} | {props.timestamp}
                </div>
            </div>
            
        </div>
    </div>
}