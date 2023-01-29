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
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";
  import routes from "../../routes.js";
  import { push, pop, replace } from "svelte-spa-router";

  const isPreview = document.location.href.includes("examplePreview");
  let nickname = { value: "1", changed: false };
  let region = { value: "1", changed: false };
  let job = { value: "1999", changed: false };
  let introduce = { value: "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111", changed: false };
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
  const onChangedRegion = (e) => {
    region = { value: e.target.value, changed: true };
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
    if (region.value.length <= 0) {
      region.changed = true;
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
    requestProfileSetupInfo.parameter.region = region.value;
    requestProfileSetupInfo.parameter.job = job.value;
    requestProfileSetupInfo.parameter.introduce = introduce.value;
    
    let route = `#${routes.filter((route) => route.title == "Profile Setup Select")[0].path}`;
    console.log(route);
    push(route);
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
    <ListInput
      outline
      label="별명"
      type="text"
      placeholder="별명을 입력 해 주세요."
      value={nickname.value}
      error={nickname.changed && !nickname.value.trim() ? "별명을 정학하게 입력 해 주세요." : ""}
      onInput={onChangedNickname}
    >
      <DemoIcon slot="media" />
    </ListInput>

    <BlockTitle />

    <ListInput
      outline
      label="지역"
      type="text"
      placeholder="지역을 입력 해 주세요."
      value={region.value}
      error={region.changed && !region.value.trim() ? "지역을 정학하게 입력 해 주세요." : ""}
      onInput={onChangedRegion}
    >
      <DemoIcon slot="media" />
    </ListInput>

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
