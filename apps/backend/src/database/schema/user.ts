import { sql } from 'drizzle-orm'
import { integer, sqliteTable } from 'drizzle-orm/sqlite-core'

export const User = sqliteTable('users', {
  id: integer().primaryKey(),
  joined_at: integer({ mode: 'timestamp' })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
})
