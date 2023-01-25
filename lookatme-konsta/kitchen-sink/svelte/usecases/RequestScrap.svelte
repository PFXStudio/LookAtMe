<script>
    import { Card, Link, Button } from "konsta/svelte";
    export let requestScrapInfo = undefined;
    export async function request() {
      let value = requestScrapInfo.parameter.name;
      console.log({value})
      const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
      const data = await response.json();
      requestScrapInfo.result = data.results;
      requestScrapInfo.errorMessage = "입력한 정보와 간편인증(민간인증서)을 확인 해 주세요.";
      requestScrapInfo.isError = true;
      console.log(requestScrapInfo.isError)
	}

</script>