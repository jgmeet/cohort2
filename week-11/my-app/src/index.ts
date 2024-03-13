import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c: any) => {
  try{
    const body = await c.req.json()
    console.log(body)
    const header = c.req.header("Authorization")
    const params = c.req.query("param")
    return c.text('Hello Hono!')
  } catch(err) {
    return c.text('Error parsing JSON');
  }
})

export default app
