import type { PageServerLoad } from './$types';
import type { Actions } from './$types';

import { error, redirect } from '@sveltejs/kit';

import { db } from '$lib/server/db/index';
import { items, claims } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const actions = {
    claim: async ({ request, params }) => {
        const data = await request.formData();
        const name = data.get("name");
        const email = data.get("email");
        const tel = data.get("tel");

        await db.insert(claims).values(
            { status: 0, item: params.slug, name: name, email: email, tel: tel }
        );

        redirect(303, "/")
        return { success: true }
    },
} satisfies Actions;

export const load: PageServerLoad = async ({ params }) => {
    const id = params.slug;

    const item = (await db.select().from(items).where(eq(items.id, id)).limit(1)).at(0);
    if (!item) {
        error(404, "Not found");
    }
    
    return {
        item: item
    }
};