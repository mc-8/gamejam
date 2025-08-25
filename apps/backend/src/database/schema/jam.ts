import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const Jam = sqliteTable('jams', {
  id: integer().primaryKey({ autoIncrement: true }).unique(),
  name: text({ length: 100 }).notNull(),
  type: text({ enum: ['GAMEJAM', 'HACKATON'] }).notNull(),
  status: text({ enum: ['UPCOMING', 'ONGOING', 'COMPLETED'] })
    .notNull()
    .default('UPCOMING'),
  starts_at: integer({ mode: 'timestamp' }).notNull(),
  ends_at: integer({ mode: 'timestamp' }).notNull()
})
