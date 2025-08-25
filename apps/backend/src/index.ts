import { users } from '@routes/users'
import { Elysia, t } from 'elysia'

const schema = t.Object({
  PORT: t.Number(),
  DATABASE_URL: t.String(),
  DATABASE_AUTH_TOKEN: t.String()
})

const app = new Elysia()
  .env(schema)
  .use(users)
  .get('/', () => 'Hello GameJam')
  .listen(process.env.PORT || 3000)

console.log(`Backend running at ${app.server?.hostname}:${app.server?.port}`)
