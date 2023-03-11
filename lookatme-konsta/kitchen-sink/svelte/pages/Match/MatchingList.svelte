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
  import routes from "../../routes.js";

  // TODO : 프로필프리뷰에서 matchingList로 안 가는 문제 있음
  console.log(">>> matchingList");
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
      status: undefined,
    },
    entryPoint: "lookerProfile", // myProfile, signup, lookerProfile
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
  };
</script>

<div style={"margin-bottom:6rem"}>
  <BlockTitle withBlock={false}>매칭 중인 룩커 목록이에요.</BlockTitle>
  <List strongIos outlineIos>
    <ListItem
      chevronMaterial={false}
      link
      title={fetchMatchListInfo.parameter.nickname}
      after={fetchMatchListInfo.parameter.status}
      subtitle={fetchMatchListInfo.parameter.companyName}
      footer={'남은시간 : 01:14:33'}
      onClick={() => {
        let parsedQuery = parse(fetchMatchListInfo) ?? {};
        let route = routes.filter((route) => route.title == "Profile Pre View")[0];
        push(`${route.path}?${stringify(parsedQuery)}`);
      }
    }
    >
      <img
        class="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
        slot="media"
        src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
        width="80"
        alt="demo"
      />
    </ListItem>
  </List>
</div>
