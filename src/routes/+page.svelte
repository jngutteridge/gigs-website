<script lang="ts">
  export let data;

  $: events = data.events;
</script>
<ul class="p-4 grid grid-col-1 gap-4">
{#each events as event}
<li class="flex flex-row gap-4 relative">
  <div>
    <h3 class="uppercase text-amber-600 font-semibold">{event.date} at {event.time}</h3>
    <h2 class="text-lg font-semibold">{event.act} at {event.venue} {event.location}</h2>
    <span class="block text-slate-600">{event.address}</span>
      <a href={`/event-${event.slug}`} class="absolute inset-0 hover:bg-slate-50 hover:opacity-50"><span class="hidden">View more information</span></a>

  </div>
  <img class="-order-1 max-w-40 lg:max-w-64" src={`/${event.actSlug}.jpg`} alt="" />
</li>
{/each}
</ul>
