import { Elysia } from 'elysia'

const app = new Elysia()
  .get('/', () => 'Hello GameJam')
  .listen(process.env.PORT || 3000)

console.log(`Backend running at ${app.server?.hostname}:${app.server?.port}`)
