<script lang="ts">
  export let data;

  $: venues = data.venues;
</script>
<ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
{#each venues as venue }
<li class="flex flex-col relative">
  <h2 class="uppercase font-bold">{ venue.name }</h2>
  <span class="block text-slate-600">{venue.address}</span>
  <a href={`/venues/${venue.slug}`} class="absolute inset-0 hover:bg-slate-50 hover:opacity-50"><span class="hidden">See upcoming dates</span></a>
</li>
{/each}
</ul>
