<script lang="ts">
  export let data;

  $: act = data.act;
  $: events = data.events;
</script>
<div class="p-4">
  <h1 class="text-xl font-semibold">{ act.name }</h1>
  <img class="mt-4 max-w-full lg:max-w-screen-md" src={`/${act.slug}.jpg`} alt="" />
  <h2 class="mt-4 text-lg font-semibold text-slate-600">Upcoming events</h2>
  <ul class="gap-4 mt-2">
  {#each events as event}
    <li>
      <div class="mb-4 text-pretty">
        <h2 class="font-semibold"><a class="underline" href={`/event-${event.slug}`}>{event.venue} {event.location}</a></h2>
        <span class="text-slate-600 block">{event.date} {event.time}</span>
      </div>
    </li>
  {/each}
  {#if events.length === 0}
    <span class="block">No upcoming events to show</span>
  {/if}
  </ul>
</div>
