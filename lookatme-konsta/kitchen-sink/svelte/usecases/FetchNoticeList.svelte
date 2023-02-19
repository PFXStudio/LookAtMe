<script>
  import { Card, Link, Button } from "konsta/svelte";
  export let fetchNoticeListInfo = undefined;
  export async function request(resultHandler) {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const data = await response.json();
    fetchNoticeListInfo.result = data.results;
    resultHandler();
  }
</script>
