import { Elysia } from 'elysia'

export const users = new Elysia({ prefix: 'users' })
  .get('/', () => 'Get all users')
  .get('/:id', ({ params }) => `Get user with ID: ${params.id}`)
  .post('/', () => 'Create a new user')
  .put('/:id', ({ params }) => `Update user with ID: ${params.id}`)
  .delete('/:id', ({ params }) => `Delete user with ID: ${params.id}`)
