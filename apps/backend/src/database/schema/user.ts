import { sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const User = sqliteTable('users', {
  id: text().primaryKey().unique().notNull()
})
