<script>
  import { Block, BlockFooter, Dialog } from "konsta/svelte";

  import { Circle3 } from "svelte-loading-spinners";

  const isPreview = document.location.href.includes("examplePreview");
  export let loader = undefined;
</script>

<BlockFooter class="flex justify-center space-y-4">
  <Circle3 size="45" color="#007bff" unit="px" duration="1.5s" bind:this={loader} />
</BlockFooter>
