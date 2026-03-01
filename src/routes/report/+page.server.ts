import type { Actions } from './$types';
import { items } from '$lib/server/db/schema';
import { db, addImage } from '$lib/server/db/index';

export const actions = {
    report: async  ({ request }) => {
        const data = await request.formData();
        const desc = data.get("desc") ?? "";

        const img = data.get("img");
        const imgStr = await addImage(img);

        await db.insert(items).values(
            { desc: desc, img: imgStr, claimed: false }
        );

        return { success: true }
    },
} satisfies Actions;