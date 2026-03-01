import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const items = sqliteTable('items', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	date: text('date').default(sql`CURRENT_DATE`),
	desc: text('desc').notNull(),
	img: text('img').notNull(), // base64 encoded
	claimed: integer('claimed', { mode: "boolean" }).notNull(),
});

export const claims = sqliteTable('claims', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	status: integer('status').notNull(), // 0: submitted, 1: rejected, 2: accepted
	item: text('item').notNull(), // id of item
	name: text('name').notNull(), // in case we need to do some sleuthing
	email: text('email').notNull(),
	tel: text('tel'),
});