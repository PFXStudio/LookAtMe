<script>
  import { BlockTitle } from "konsta/svelte";
  import routes from "../../routes.js";

  import FetchCharacterImages from "../../usecases/FetchCharacterImages.svelte";
  console.log(">>> scrap");
</script>

<div style={"margin-bottom:6rem"}>
  <BlockTitle withBlock={false}>기다리고 있는 룩커가 있어요.</BlockTitle>
  <FetchCharacterImages
    route={routes.filter((route) => route.title == "Scrap Input")[0]}
    title={"정보 가져오기"}
  />
</div>
