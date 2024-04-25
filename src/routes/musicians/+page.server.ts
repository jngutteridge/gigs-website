import { acts } from '$lib/data';


export function load() {
    return { acts: acts.sort((a, b) => a.name.localeCompare(b.name)) };
}
