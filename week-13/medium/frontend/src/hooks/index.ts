import {React, useEffect, useState} from 'react'
import axios from '../../node_modules/axios/index'

export function useBlog() {
    const [blog, setBlog] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:8787/api/v1/blog/bulk', {
            headers: {
                Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4Y2M2MGJmLWNmZjktNDNiMS1hMTQ5LTM5ZGQ1NDhlMTMwMyJ9.3dc3Q-gCGipLHm8hJEJAk46HAxSM4OOaHM2r2OFsXL4"
            }
        }).then(repsonse => {
            setBlog(repsonse.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    return {blog, loading}
}

export function useBlogs() {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('http://localhost:8787/api/v1/blog/bulk', {
            headers: {
                Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4Y2M2MGJmLWNmZjktNDNiMS1hMTQ5LTM5ZGQ1NDhlMTMwMyJ9.3dc3Q-gCGipLHm8hJEJAk46HAxSM4OOaHM2r2OFsXL4"
            }
        }).then(repsonse => {
            setBlogs(repsonse.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    return {blogs, loading}
}