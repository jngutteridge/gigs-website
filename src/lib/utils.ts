import { error } from "@sveltejs/kit";
import type { Event, Act, Venue } from "./data";

export interface EventView {
  venue: string; // venue.name
  act: string; // act.name
  location: string // venue.location
  date: string; // "Wed 24 Apr"
  time: string; // event.time
  actSlug: string; // act.slug
  slug: string; // fran-and-lucy-flying-childers-wed-24-apr
  address: string; // venue.address
  venueSlug: string; // venue.slug
}

function formatDate(date: string) {
  const dateObj = new Date(date);
  return [['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'][dateObj.getDay()], dateObj.getDate(), ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][dateObj.getMonth()]].join(' ');
}

function slugDate(date: string) {
  return date.toLowerCase().split(' ').join('-');
}

function slugmatDate(date: string) {
  return slugDate(formatDate(date));
}

export function matchEvent(event: Event, slug: string) {
  return slug === [event.act, event.venue, slugmatDate(event.date)].join('-');
}

export function getEventsView(events: Event[], acts: Act[], venues: Venue[]): EventView[] {
  events.sort((a, b) => a.date.localeCompare(b.date));
  const eventsView = [];
  for (const event of events) {
    const venue = venues.find(venue => venue.slug === event.venue);
    const act = acts.find(act => act.slug === event.act);
    if (!venue || !act) {
      throw error;
    }
    eventsView.push(getEventView(event, act, venue));
  }
  return eventsView;
}

export function getEventView(event: Event, act: Act, venue: Venue): EventView {
  const date = formatDate(event.date);
  const slug = [act.slug, venue.slug, slugDate(date)].join('-');
  return {
    venue: venue.name,
    act: act.name,
    location: venue.location,
    date,
    time: event.time,
    actSlug: act.slug,
    slug,
    address: venue.address,
    venueSlug: venue.slug,
  };
}
