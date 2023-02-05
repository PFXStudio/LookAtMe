<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    List,
    ListInput,
    Block,
    Button,
    ListItem,
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";
  import routes from "../../routes.js";
  import {
    location, // /bla/blabla/route
    querystring, // /bla?Location=Artworld
    push,
    pop,
    replace,
    link,
  } from "svelte-spa-router";
  import { parse, stringify } from "qs";
  import BlockHeader from "../../../../src/svelte/components/BlockHeader.svelte";

  const isPreview = document.location.href.includes("examplePreview");
  let nickname = { value: "레인", changed: false };
  let job = { value: "개발자", changed: false };
  let introduce = {
    value:
      "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
    changed: false,
  };
  let route = undefined;
  export let requestProfileSetupInfo = {
    parameter: {
      nickname: undefined,
      region: undefined,
      job: undefined,
      introduce: undefined,
      tall: undefined,
      education: undefined,
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
  const onChangedNickname = (e) => {
    nickname = { value: e.target.value, changed: true };
  };
  const onChangedJob = (e) => {
    job = { value: e.target.value, changed: true };
  };
  const onChangedIntroduce = (e) => {
    introduce = { value: e.target.value, changed: true };
  };

  function didTapNext() {
    if (nickname.value.length <= 0) {
      nickname.changed = true;
      return;
    }
    if (job.value.length <= 0) {
      job.changed = true;
      return;
    }
    if (introduce.value.length <= 99) {
      introduce.changed = true;
      return;
    }

    requestProfileSetupInfo.parameter.nickname = nickname.value;
    requestProfileSetupInfo.parameter.job = job.value;
    requestProfileSetupInfo.parameter.introduce = introduce.value;

    let parsedQuery = parse(requestProfileSetupInfo) ?? {};
    route = routes.filter((route) => route.title == "Profile Setup Select")[0];
    push(`${route.path}?${stringify(parsedQuery)}`);
    console.log(`${route.path}?${stringify(parsedQuery)}`);
  }
</script>

<Page>
  <Navbar title="프로필 정보 설정하기">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>룩커에게 보여질 프로필 정보를 설정 해 주세요.</BlockTitle>

  <List strongIos insetIos>
    <div class="flex flex-row items-center">
      <ListInput
        outline
        label="별명"
        type="text"
        placeholder="별명을 입력 해 주세요."
        value={nickname.value}
        error={nickname.changed && !nickname.value.trim() ? "별명을 정학하게 입력 해 주세요." : ""}
        onInput={onChangedNickname}
        class="w-full grow-1"
      >
        <DemoIcon slot="media" />
      </ListInput>
      <Button class="mr-4 demo-container" small="true" raised="true" tonal>중복 확인</Button>
    </div>

    <style>
      .demo-container {
        max-width: 100px;
        width: 100px;
      }
    </style>

    <ListInput
      outline
      label="직업"
      type="text"
      placeholder="직업을 입력 해 주세요."
      value={job.value}
      error={job.changed && !job.value.trim() ? "직업을 정학하게 입력 해 주세요." : ""}
      onInput={onChangedJob}
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="자기소개"
      type="text"
      placeholder="자기소개를 입력 해 주세요."
      value={introduce.value}
      error={introduce.changed && !introduce.value.trim() && introduce.value.length >= 100
        ? "자기소개를 100자 이상 입력 해 주세요."
        : ""}
      onInput={onChangedIntroduce}
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>
  <Block outlineIos class="space-y-2">
    <Button large class="k-color-brand-yellow" onClick={didTapNext}>다음</Button>
  </Block>
</Page>
