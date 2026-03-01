import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db/index';
import { items } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
    const unclaimed_items = await db.select().from(items).where(eq(items.claimed, false));

    return {
        items: unclaimed_items
    };
};