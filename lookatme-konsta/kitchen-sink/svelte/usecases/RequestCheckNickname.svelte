<script>
    import { Card, Link, Button } from "konsta/svelte";
    export let requestCheckNicknameInfo = undefined;
    export async function request(resultHandler) {
      let value = requestCheckNicknameInfo.parameter.nickname;
      console.log({value})
      const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
      const data = await response.json();
      requestCheckNicknameInfo.result = "success";
      requestCheckNicknameInfo.errorMessage = undefined;
      requestCheckNicknameInfo.isError = false;
      // requestCheckNicknameInfo.result = undefined;
      // requestCheckNicknameInfo.errorMessage = "error";
      // requestCheckNicknameInfo.isError = true;

      console.log(requestCheckNicknameInfo.isError)
      resultHandler()
	}

</script>