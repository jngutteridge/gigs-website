import { acts, events, venues } from '$lib/data';
import { getEventsView } from '$lib/utils.js';
import { error } from '@sveltejs/kit';


export function load({ params: { venue } }) {
  const venueData = venues.find(venueData => venueData.slug === venue);
  if (!venueData) {
    throw error(404);
  }

  const eventsData = getEventsView(events.filter(ev => ev.venue === venueData.slug), acts, [venueData]);

  return { venue: venueData, events: eventsData };
}
