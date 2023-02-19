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
    Dialog,
    Icon,
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";
  import SpinLoader from "../Commons/SpinLoader.svelte";
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
  import RequestCheckNickname from "../../usecases/RequestCheckNickname.svelte";
  import NicknameFillIcon from "../../components/Icons/NicknameFillIcon.svelte";
  import JobFillIcon from "../../components/Icons/JobFillIcon.svelte";
  import IntroduceFillIcon from "../../components/Icons/IntroduceFillIcon.svelte";

  const isPreview = document.location.href.includes("examplePreview");
  export let requestProfileInfo = {
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
    entryPoint: undefined, // myProfile, signup, lookerProfile
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
    isPreview: false,
  };

  $: parsedQuery = parse($querystring) ?? {};

  // Set someVariableStore if found in query param
  $: {
    let parameter = parsedQuery.parameter;
    if (parameter) {
      requestProfileInfo.parameter = parameter;
    }

    let entryPoint = parsedQuery.entryPoint;
    if (entryPoint) {
      requestProfileInfo.entryPoint = entryPoint;
    }
  }

  let nickname = { value: "", changed: false, checkNickname: false };
  let job = { value: "개발자", changed: false };
  let introduce = {
    value:
      "11111111111111111111111111 1111111111111111111111111 11111111111111111111111111111111111111111 11111111",
    changed: false,
  };
  let route = undefined;
  let loader = undefined;
  const onChangedNickname = (e) => {
    errorMessageNickname = "";
    nickname = { value: e.target.value, changed: true, checkNickname: false };
  };
  const onChangedJob = (e) => {
    job = { value: e.target.value, changed: true };
  };
  const onChangedIntroduce = (e) => {
    introduce = { value: e.target.value, changed: true };
  };

  let errorMessageNickname = "";
  function validNickname() {
    if (nickname.changed == false) {
      errorMessageNickname = "별명을 정학하게 입력 해 주세요.";
      return;
    }
    if (nickname.changed && !nickname.value.trim()) {
      errorMessageNickname = "별명을 정학하게 입력 해 주세요.";
      return;
    }

    if (nickname.checkNickname == false) {
      errorMessageNickname = "별명 중복확인을 해 주세요.";
      return;
    }

    return errorMessageNickname;
  }

  let requestCheckNickname = undefined;
  let requestCheckNicknameInfo = {
    parameter: {
      nickname: undefined,
    },
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
  };

  function didTapCheckNickname() {
    if (nickname.value.length <= 0) {
      nickname.changed = true;
      return;
    }

    requestCheckNicknameInfo.parameter.nickname = nickname.value;
    requestCheckNicknameInfo.status = "loading";
    requestCheckNickname.request(() => {
      if (requestCheckNicknameInfo.result !== undefined) {
        requestCheckNicknameInfo.status = "success";
        errorMessageNickname = "";
        nickname.changed = true;
        nickname.checkNickname = true;
      } else {
        requestCheckNicknameInfo.status = "failed";
        errorMessageNickname = "이미 사용 중인 별명이에요.";
        nickname.changed = true;
        nickname.checkNickname = false;
      }
    });
  }

  function didTapNext() {
    validNickname();
    if (errorMessageNickname.length > 0) {
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

    requestProfileInfo.parameter.nickname = nickname.value;
    requestProfileInfo.parameter.job = job.value;
    requestProfileInfo.parameter.introduce = introduce.value;

    let parsedQuery = parse(requestProfileInfo) ?? {};
    route = routes.filter((route) => route.title == "Profile Setup Select")[0];
    push(`${route.path}?${stringify(parsedQuery)}`);
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
        error={errorMessageNickname}
        onInput={onChangedNickname}
        class="w-full grow-1"
      >
        <NicknameFillIcon slot="media" />
      </ListInput>
      <Button
        class="mr-4 demo-container"
        small="true"
        raised="true"
        tonal
        onClick={didTapCheckNickname}>중복 확인</Button
      >
      <RequestCheckNickname {requestCheckNicknameInfo} bind:this={requestCheckNickname} />
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
      <JobFillIcon slot="media" />
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
      <IntroduceFillIcon slot="media" />
    </ListInput>
  </List>
  <Block outlineIos class="space-y-2">
    <Button large class="k-color-brand-yellow" onClick={didTapNext}>다음</Button>
  </Block>

  <Dialog opened={requestCheckNicknameInfo.status === "loading"} backdrop="false">
    <svelte:fragment slot="title">정보를 요청하는 중이에요...</svelte:fragment>
    <Block />
    <SpinLoader {loader} />
  </Dialog>
</Page>
