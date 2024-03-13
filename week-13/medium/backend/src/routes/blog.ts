import {Hono} from 'hono'
import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import {verify} from "hono/jwt"

export const blogRouter = new Hono()

blogRouter.use('/*', async (c, next) => {
    try{
        const authHeader = c.req.header('authorization')
        const token = authHeader.split(" ")[1]

        const author = await verify(token, c.env.JWT_SECRET)
        if(author) {
            c.set('authorId', author.id)
            await next()
        } else {
            c.status(403)
            return c.text("Auhtentication failed!")
        }
    } catch(err) {
        console.log(err)
        return c.text('Validation failed!')
    }
})

blogRouter.get('/bulk', async (c) => { // to get all the blogs on website
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany({
        select: {id: true,title: true,content: true,
            date: true,author: { select: {name: true} }
        }
    })
    return c.json(blogs)
})

blogRouter.get('/:id', async (c) => { // to get a blog
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const blogs = await prisma.blog.findUnique({where: {id: body.id}})
    return c.json(blogs)
})

blogRouter.post('/', async (c) => { // to upload a blog
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const blog = await prisma.blog.create({
        data: {
            title: body.title, content: body.content, authorId: c.get('authorId')
        }
    })

    return c.json({message: 'Blog added successfully', id: blog.id})
})

blogRouter.put('/', async (c) => { // to update the blog
	const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    await prisma.blog.update({
        where: {id: body.id, authorId: c.get('authorId')},
        data: {
            title: body.title, content: body.content
        }
    })

    return c.text('Blog updated successfully')
})

blogRouter.get('/', (c) => {
  return c.text('Hello Hono!')
})