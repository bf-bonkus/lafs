import type { Actions } from './$types';
import * as schema from '$lib/server/db/schema';
import * as db from '$lib/server/db/index';

export const actions = {
    report: async  ({ request }) => {
        const data = await request.formData();
        const desc = data.get("desc") ?? "";

        const img = data.get("img");
        const imgStr = await db.addImage(img)

        await db.db.insert(schema.items).values(
            { desc: desc, img: imgStr, claimed: false }
        );

        return { success: true }
    },
} satisfies Actions;