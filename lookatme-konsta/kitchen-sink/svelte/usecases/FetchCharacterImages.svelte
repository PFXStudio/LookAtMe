<script>
  import { Card, Link, Button } from "konsta/svelte";
  export let route = undefined;
  export let title = undefined;

  let characters = [];

  async function loadCharacter() {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const data = await response.json();
    characters = data.results;
  }

  loadCharacter();
</script>

<div class="lg:grid lg:grid-cols-2">
  {#each characters as character}
    <Card>
      <div
        slot="header"
        class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
        style="background-image: url({character.image})"
      >
        Lorem Ipsum
      </div>
      <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
      <p>
        Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis.
        Phasellus quis nibh hendrerit...
      </p>
      <svelte:fragment slot="footer">
        <div class="flex justify-end material:hidden">
          <Link link href={`#${route.path}`}>{title}</Link>
        </div>
        <div class="flex justify-end ios:hidden space-x-2">
          <Button rounded inline outline link href={`#${route.path}`}>{title}</Button>
        </div>
      </svelte:fragment>
    </Card>
  {/each}
</div>
