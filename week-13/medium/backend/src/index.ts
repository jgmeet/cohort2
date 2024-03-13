import { Hono } from 'hono'
import { blogRouter } from './routes/blog';
import { userRouter } from './routes/user';
import z from "zod";
import { cors } from 'hono/cors'

const app = new Hono()
app.use(cors());

export const userSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(4)
})

app.route('/api/v1/blog', blogRouter) 
app.route('/api/v1/user', userRouter)

app.get('/', (c)=>{
  return c.text('Welcome to Medium!')
})

export default app
