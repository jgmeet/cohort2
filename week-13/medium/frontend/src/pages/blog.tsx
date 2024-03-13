import {React} from 'react'
import { useBlog } from '../hooks/index'
import {Loading} from './blogs'

interface outp {
    author: {name: string}
    title: string
    content: string
    date: any
}

export function Blog() {
    const {blog, loading} = useBlog()
    
    if(loading) return <Loading />

    return <div>
        <p>{blog.title}</p>
    </div>
}