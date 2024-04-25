import { acts, events, venues } from '$lib/data';
import { getEventsView } from '$lib/utils';


export function load() {
  return { events: getEventsView(events, acts, venues), };
}
