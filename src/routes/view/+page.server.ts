import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db/index';

export const load: PageServerLoad = async ({ params }) => {
    const items = await db.query.items.findMany({
        columns: {
            claimed: false,
        },
    });
    return {
        items: items
    };
};