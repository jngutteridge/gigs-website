<script lang="ts">
  export let data;

  $: acts = data.acts;
</script>
<ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
{#each acts as act }
<li class="flex flex-col relative">
  <h2 class="uppercase font-bold">{ act.name }</h2>
  <img class="-order-1" src={`/${act.slug}.jpg`} alt="" />
  <a href={`/musicians/${act.slug}`} class="absolute inset-0 hover:bg-slate-50 hover:opacity-50"><span class="hidden">See upcoming dates</span></a>
</li>
{/each}
</ul>
