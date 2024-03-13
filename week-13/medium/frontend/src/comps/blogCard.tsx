import {React} from 'react'

interface inp {
    author: string
    title: string
    content: string
    date: string
}

export function Blog({author,title,content,date}: inp) {
    return <div className='flex justify-center my-8'>
        <div className='w-3/4'>
        <div className='flex items-center'>
            <Avatar author={author}/> {author}
            <FormattedDate dt={date}/>
        </div>
        <p className='font-bold text-xl mt-2'>{title}</p>
        <p className='font-thin text-lg'>
        {(()=>{
            let str:string = content
            if(content.length>230) str = content.slice(0,255) + "...."
            return str
        })()}
        </p>
        <div className='text-sm text-gray-500 mt-8 mb-4'>
            {(()=>{
                let time:number = Math.max(1, parseInt(content.length/100));
                return <>{time} min read</>;
            })()}
        </div>
        <hr className='h-1' />
        </div>
    </div>
}

function FormattedDate({dt}: {dt: any}) {
    const isoDateString = dt;
    const date = new Date(isoDateString);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${month} ${day} ${year}`;
    return <p className='ml-1 text-sm text-gray-500'>-{formattedDate}</p>
}

export function Avatar({author}: {author: string}) {
    return <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-1">
    <span className="font-medium text-gray-600 dark:text-gray-300">
    {(()=>{
        let av:string = author[0]
        if(author.split(' ')[1]) av += author.split(' ')[1][0]
        return av.toUpperCase()
    })()}
    </span>
</div>
}