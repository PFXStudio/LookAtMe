<script>
  import { Card, Link, Button } from "konsta/svelte";
  export let fetchMatchListInfo = undefined;
  export async function request(resultHandler) {
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const data = await response.json();
    fetchMatchListInfo.result = "success";
    fetchMatchListInfo.parameter.salary = "5,200만원";
    fetchMatchListInfo.parameter.companyName = "Naver";
    fetchMatchListInfo.parameter.nickname = "판교동쭈꾸미";
    fetchMatchListInfo.parameter.region = "경기도";
    fetchMatchListInfo.parameter.job = "기획자";
    fetchMatchListInfo.parameter.introduce = "기획자를 소개소개소개소개 소개소개소개소개소개소개소개소개소개소개소개소개";
    fetchMatchListInfo.parameter.tall = "166cm";
    fetchMatchListInfo.parameter.graduation = "대학원 졸업";
    fetchMatchListInfo.parameter.body = "보통";
    fetchMatchListInfo.parameter.blood = "B형";
    fetchMatchListInfo.parameter.religion = "천주교";
    fetchMatchListInfo.parameter.drink = "어쩔 수 없을 때만";
    fetchMatchListInfo.parameter.smoking = "흡연";
    fetchMatchListInfo.parameter.status = "수락을 기다리고 있는 중이에요.";
    fetchMatchListInfo.errorMessage = undefined;
    resultHandler();
  }
</script>
