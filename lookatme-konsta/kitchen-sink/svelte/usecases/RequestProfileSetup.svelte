<script>
    import { Card, Link, Button } from "konsta/svelte";
    export let requestProfileSetupInfo = undefined;
    export async function request(resultHandler) {
      let value = requestProfileSetupInfo.parameter.name;
      console.log({value})
      const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
      const data = await response.json();
      requestProfileSetupInfo.result = undefined;
      requestProfileSetupInfo.errorMessage = "프로필 설정에 실패 했어요. 잠시 후 다시 시도 해 주세요.";
      requestProfileSetupInfo.isError = true;
      console.log(requestProfileSetupInfo.isError)
      resultHandler()
	}

</script>