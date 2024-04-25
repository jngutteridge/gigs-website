<script lang="ts">
  export let data;

  $: venue = data.venue;
  $: events = data.events;
  $: mapsLink = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent([venue.name, venue.address].join(', '));
</script>
<div class="p-4">
  <h1 class="text-xl font-semibold">{ venue.name }</h1>
  <div class="block">
    <a class="underline" href={mapsLink} target="_blank">{venue.address}</a>
  </div>
  <h2 class="mt-4 text-lg font-semibold text-slate-600">Upcoming events</h2>
  <ul class="gap-4 mt-2">
  {#each events as event}
    <li>
      <div class="mb-4 text-pretty">
        <h2 class="font-semibold"><a class="underline" href={`/event-${event.slug}`}>{event.act}</a></h2>
        <span class="text-slate-600 block">{event.date} {event.time}</span>
      </div>
    </li>
  {/each}
  {#if events.length === 0}
    <span class="block">No upcoming events to show</span>
  {/if}
  </ul>
</div>
