<script>
  import { Card, Link, Button } from "konsta/svelte";
  export let fetchNoticeListInfo = undefined;
  export async function request(resultHandler) {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const data = await response.json();
    let characters = data.results;
    fetchNoticeListInfo.result = {
      count: 3,
      list: [
        {
          title: "제목입니다아아아아!!",
          contents: "내용입니다아아아아아1111 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아\n내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아\n",
          updatedDate: "2023.02.22",
          imagePath: characters[0].image
        },
        {
          title: "제목입니다아아아아!!22222",
          contents: "내용입니다아아아아222아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아\n내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아\n",
          updatedDate: "2023.02.02",
          imagePath: characters[1].image
        },
        {
          title: "제목입니다아아아아!!3333",
          contents: "내용입니다아아아아아33333 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아\n내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아 내용입니다아아아아아\n",
          updatedDate: "2023.01.11",
          imagePath: characters[2].image
        }
      ]
    }
    resultHandler();
  }
</script>
