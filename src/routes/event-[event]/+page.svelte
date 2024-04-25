<script lang="ts">
  export let data;

  $: event = data.event;
  $: mapsLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent([event.venue, event.address].join(', '));
  $: actLink = '/musicians/' + event.actSlug;
  $: venueLink = '/venues/' + event.venueSlug;
</script>
<div class="p-4">
  <h2 class="text-xl font-semibold">{event.act} at {event.venue} {event.location}</h2>
  <h3 class="text-lg text-slate-600 font-semibold">{event.date} at {event.time}</h3>
  <img class="mt-4 max-w-full lg:max-w-screen-md" src={`/${event.actSlug}.jpg`} alt="" />
  <div class="mt-4">
    <strong class="block font-semibold">{event.venue}</strong>
    <div class="block">
      <a class="underline" href={mapsLink} target="_blank">{event.address}</a>
    </div>
  </div>
  <div class="mt-4 flex flex-col gap-2 items-start">
    <a class="font-semibold pb-2 pt-1 px-3 bg-orange-800 text-slate-50" href={actLink}>See more events from {event.act}</a>
    <a class="font-semibold pb-2 pt-1 px-3 bg-orange-800 text-slate-50" href={venueLink}>See more events at {event.venue}</a>
  </div>
</div>
