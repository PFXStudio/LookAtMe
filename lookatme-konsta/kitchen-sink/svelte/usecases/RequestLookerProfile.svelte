<script>
  import { Card, Link, Button } from "konsta/svelte";
  export let requestProfileInfo = undefined;
  export async function request(resultHandler) {
    let value = requestProfileInfo.parameter.name;
    const response = await fetch("https://rickandmortyapi.com/api/character?page=1");
    const data = await response.json();
    requestProfileInfo.result = "success";
    requestProfileInfo.parameter.salary = "5,200만원";
    requestProfileInfo.parameter.companyName = "Naver";
    requestProfileInfo.parameter.nickname = "판교동쭈꾸미";
    requestProfileInfo.parameter.region = "경기도";
    requestProfileInfo.parameter.job = "기획자";
    requestProfileInfo.parameter.introduce = "기획자를 소개소개소개소개 소개소개소개소개소개소개소개소개소개소개소개소개";
    requestProfileInfo.parameter.tall = "166cm";
    requestProfileInfo.parameter.graduation = "대학원 졸업";
    requestProfileInfo.parameter.body = "보통";
    requestProfileInfo.parameter.blood = "B형";
    requestProfileInfo.parameter.religion = "천주교";
    requestProfileInfo.parameter.drink = "어쩔 수 없을 때만";
    requestProfileInfo.parameter.smoking = "흡연";
    requestProfileInfo.errorMessage = undefined;
    resultHandler();
  }
</script>
