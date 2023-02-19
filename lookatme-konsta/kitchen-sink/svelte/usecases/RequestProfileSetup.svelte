<script>
  import { Card, Link, Button } from "konsta/svelte";
  export let requestProfileInfo = undefined;
  export async function request(resultHandler) {
    let value = requestProfileInfo.parameter.name;
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const data = await response.json();
    requestProfileInfo.result = "success";
    requestProfileInfo.errorMessage = undefined;
    resultHandler();
  }
</script>
