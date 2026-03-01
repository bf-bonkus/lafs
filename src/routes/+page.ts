import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url }) => {
    const redirect = url.searchParams.get("redirect");

    if (redirect === "success") {
        return { redirect: true }
    }
};