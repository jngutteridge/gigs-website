import { acts, events, venues } from '$lib/data';
import { getEventsView } from '$lib/utils.js';
import { error } from '@sveltejs/kit';


export function load({ params: { act } }) {
  const actData = acts.find(actData => actData.slug === act);
  if (!actData) {
    throw error(404);
  }

  const eventsData = getEventsView(events.filter(ev => ev.act === actData.slug), [actData], venues);

  return { act: actData, events: eventsData };
}
