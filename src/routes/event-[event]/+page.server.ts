import { acts, events, venues } from '$lib/data';
import { getEventView, matchEvent } from '$lib/utils';
import { error } from '@sveltejs/kit';


export function load({ params: { event }}) {
  const eventData = events.find(ev => matchEvent(ev, event));
  if (!eventData) {
    throw error(404);
  }
  const venue = venues.find(venue => venue.slug === eventData.venue);
  const act = acts.find(act => act.slug === eventData.act);
  if (!venue || !act) {
    throw error;
  }
  const eventView = getEventView(eventData, act, venue);
  return { event: eventView };
}
