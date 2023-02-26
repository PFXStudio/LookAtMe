<script>
  import { Block, List, ListItem, Card, Chip, BlockTitle, TabbarLink } from "konsta/svelte";
  import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/svelte";
  import Router, {
    location, // /bla/blabla/route
    querystring, // /bla?Location=Artworld
    push,
    pop,
    link,
    replace,
  } from "svelte-spa-router";

  import { parse, stringify } from "qs";

  export let fetchMatchListInfo = {
    parameter: {
      name: undefined,
      salary: undefined,
      companyName: undefined,
      nickname: undefined,
      region: undefined,
      job: undefined,
      introduce: undefined,
      tall: undefined,
      graduation: undefined,
      body: undefined,
      blood: undefined,
      religion: undefined,
      drink: undefined,
      smoking: undefined,
    },
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
  };

  export let status = "";
</script>

<div style={"margin-bottom:6rem"}>
  <BlockTitle withBlock={false}>매칭 중인 룩커 목록이에요.</BlockTitle>
  <List strongIos outlineIos>
    <ListItem
      chevronMaterial={false}
      link
      title={fetchMatchListInfo.parameter.nickname}
      after={status}
      subtitle={fetchMatchListInfo.parameter.companyName}
      text={fetchMatchListInfo.parameter.introduce}
    >
      <img
        class="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
        slot="media"
        src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
        width="80"
        alt="demo"
      />
      <div class="flex items-center ml-4 mr-4 w-full">
        <Chip class="m-0.5" colors={{ fillBg: "bg-red-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.salary}
        </Chip>
        <Chip class="m-0.5" colors={{ fillBg: "bg-green-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.tall}
        </Chip>
        <Chip class="m-0.5" colors={{ fillBg: "bg-blue-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.region}
        </Chip>
        <Chip class="m-0.5" colors={{ fillBg: "bg-yellow-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.graduation}
        </Chip>
      </div>
      <div class="flex items-center ml-4 mr-4 w-full">
        <Chip class="m-0.5" colors={{ fillBg: "bg-pink-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.body}
        </Chip>

        <Chip class="m-0.5" colors={{ fillBg: "bg-red-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.blood}
        </Chip>

        <Chip class="m-0.5" colors={{ fillBg: "bg-green-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.religion}
        </Chip>

        <Chip class="m-0.5" colors={{ fillBg: "bg-blue-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.drink}
        </Chip>

        <Chip class="m-0.5" colors={{ fillBg: "bg-gray-500", fillText: "text-white" }}>
          {fetchMatchListInfo.parameter.smoking}
        </Chip>
      </div>
    </ListItem>
  </List>
</div>
