import {Hono} from 'hono'
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {sign} from "hono/jwt"
import { userSchema } from '../index';
 
export const userRouter = new Hono()

userRouter.get('/', async (c) => { // get all users
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const users = await prisma.user.findMany()
    return c.json(users)
})

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

        const body = await c.req.json()
        const {success} = userSchema.safeParse(body)
        if(!success) {
            c.status(400)
            return c.text("Invalid inputs")
        }

    try{
        const user = await prisma.user.create({
        data: {name: body.name, email: body.email, password: body.password}
        })

        const token = await sign({id: user.id}, c.env.JWT_SECRET)
        return c.json({ jwt_token: token })

    } catch(err) {
        return c.json({msg: "Error while creating user"})
    }

})
  
userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const {success} = userSchema.safeParse(body)
    if(!success) {
        c.status(400)
        return c.text("Invalid inputs")
    }

    const user = await prisma.user.findUnique({
        where: {email: body.email, password: body.password}
    })

    if(!user) {
        c.status(403)
        return c.json({msg: "User not exists!"})
    }

    const token = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({ jwt_token: token })
})
  