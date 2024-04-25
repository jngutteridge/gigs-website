import { venues } from '$lib/data';


export function load() {
    return { venues: venues.sort((a, b) => a.name.localeCompare(b.name)) };
}
