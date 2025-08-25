import { database } from '@database/index'
import { User } from '@database/schema/user'
import { eq } from 'drizzle-orm'
import { Elysia, t } from 'elysia'

export const users = new Elysia({ prefix: 'users' })
  .get('/', async () => await database.select().from(User).all())
  .get(
    '/:id',
    async ({ params, status }) => {
      const user = await database
        .select()
        .from(User)
        .where(eq(User.id, params.id))
        .get()

      if (!user) {
        return status(404, { message: 'User not found' })
      }

      return user
    },
    {
      params: t.Object({
        id: t.Number()
      })
    }
  )
  .post(
    '/',
    async ({ body }) => {
      let user = await database
        .select()
        .from(User)
        .where(eq(User.id, body.id))
        .get()

      if (!user) {
        user = await database
          .insert(User)
          .values({ ...body })
          .returning()
          .get()
      }

      return user
    },
    {
      body: t.Object({
        id: t.Number(),
        joined_at: t.Date()
      })
    }
  )
  .patch(
    '/:id',
    async ({ params, body, status }) => {
      const user = await database
        .update(User)
        .set({ ...body })
        .where(eq(User.id, params.id))
        .returning()
        .get()

      if (!user) {
        return status(404, { message: 'User not found' })
      }

      return user
    },
    {
      body: t.Partial(
        t.Object({
          id: t.Number(),
          joined_at: t.Date()
        })
      ),
      params: t.Object({
        id: t.Number()
      })
    }
  )
  .delete(
    '/:id',
    async ({ params, status }) => {
      const user = await database
        .delete(User)
        .where(eq(User.id, params.id))
        .returning()
        .get()

      if (!user) {
        return status(404, { message: 'User not found' })
      }

      return user
    },
    {
      params: t.Object({
        id: t.Number()
      })
    }
  )
