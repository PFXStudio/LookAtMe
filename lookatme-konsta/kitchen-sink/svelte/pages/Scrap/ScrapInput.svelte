<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    List,
    ListInput,
    Block,
    Segmented,
    SegmentedButton,
    Button,
    BlockHeader,
    BlockFooter,
    Dialog,
    DialogButton,
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";
  import { parse, stringify } from "qs";
  import RequestScrap from "../../usecases/RequestScrap.svelte";
  import AuthTypeDescription from "./ScrapInputAuthTypeDescription.svelte";
  import AuthTypeWrongDescription from "./ScrapInputAuthTypeWrongDescription.svelte";
  import routes from "../../routes.js";
  import SpinLoader from "../Commons/SpinLoader.svelte";
  import Router, {
    location, // /bla/blabla/route
    querystring, // /bla?Location=Artworld
    push,
    pop,
    link,
    replace,
  } from "svelte-spa-router";

  const isPreview = document.location.href.includes("examplePreview");
  let route = undefined;
  let name = { value: "1", changed: false };
  let email = { value: "1", changed: false };
  let phone = { value: "1", changed: false };
  let birthday = { value: "1999", changed: false };
  let authType = { value: "1", changed: false };
  let requestScrapInfo = {
    parameter: undefined,
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
  };
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
    entryPoint: "signup", // myProfile, signup, lookerProfile
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
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

  let requestScrap = undefined;
  let loader = undefined;

  const onChangedName = (e) => {
    name = { value: e.target.value, changed: true };
  };
  const onChangedEmail = (e) => {
    email = { value: e.target.value, changed: true };
  };
  const onChangedPhone = (e) => {
    phone = { value: e.target.value, changed: true };
  };
  const onChangedBirthDay = (e) => {
    birthday = { value: e.target.value, changed: true };
  };

  function didTapRequest() {
    if (authType.value.length <= 0) {
      authType.changed = true;
      return;
    }
    if (name.value.length <= 0) {
      name.changed = true;
      return;
    }
    if (birthday.value.length <= 0) {
      birthday.changed = true;
      return;
    }
    if (phone.value.length <= 0) {
      phone.changed = true;
      return;
    }
    if (email.value.length <= 0) {
      email.changed = true;
      return;
    }

    requestScrapInfo.parameter = {
      authType: authType.value,
      name: name.value,
      birthday: birthday.value,
      phone: phone.value,
      email: email.value,
    };
    requestScrapInfo.status = "loading";
    requestScrap.request(() => {
      if (requestScrapInfo.result !== undefined) {
        requestScrapInfo.status = "success";
        requestProfileInfo.parameter.name = name.value;
        requestProfileInfo.parameter.salary = "4,444만원";
        requestProfileInfo.parameter.companyName = "스타벅스";
      } else {
        requestScrapInfo.status = "failed";
      }
    });
  }
</script>

<Page>
  <Navbar title="정보 가져오기">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>간편인증(민간인증서)을 이용해 고객님의 회원 정보를 불러 올 거에요.</BlockTitle>
  <Block>
    <svelte:component
      this={authType.changed && !authType.value.trim()
        ? AuthTypeWrongDescription
        : AuthTypeDescription}
    />
    <Segmented strong>
      <SegmentedButton
        strong
        active={authType.value === "네이버"}
        onClick={() => (authType = { value: "네이버", changed: true })}
      >
        네이버
      </SegmentedButton>
      <SegmentedButton
        strong
        active={authType.value === "카카오톡"}
        onClick={() => (authType = { value: "카카오톡", changed: true })}
      >
        카카오톡
      </SegmentedButton>
      <SegmentedButton
        strong
        active={authType.value === "페이코"}
        onClick={() => (authType = { value: "페이코", changed: true })}
      >
        페이코
      </SegmentedButton>
    </Segmented>
  </Block>

  <List strongIos insetIos>
    <ListInput
      outline
      label="이름"
      type="text"
      placeholder="이름을 입력 해 주세요."
      value={name.value}
      error={name.changed && !name.value.trim() ? "이름을 정학하게 입력 해 주세요." : ""}
      onInput={onChangedName}
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="생년월일을 입력 해 주세요."
      type="date"
      defaultValue=""
      placeholder="2010-01-01"
      error={birthday.changed && !birthday.value.trim()
        ? "생년월일을 정학하게 입력 해 주세요."
        : ""}
      onInput={onChangedBirthDay}
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="핸드폰 번호"
      type="tel"
      placeholder="핸드폰 번호를 입력 해 주세요."
      value={phone.value}
      error={phone.changed && !phone.value.trim() ? "핸드폰 번호를 정학하게 입력 해 주세요." : ""}
      onInput={onChangedPhone}
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="이메일 주소"
      type="email"
      placeholder="이메일을 입력 해 주세요."
      value={email.value}
      error={email.changed && !email.value.trim() ? "이메일 주소를 정학하게 입력 해 주세요." : ""}
      onInput={onChangedEmail}
    >
      <DemoIcon slot="media" />
    </ListInput>
    <BlockHeader
      >이메일을 통해 고객님의 정보를 찾아 올 수 있어요. 정확하게 입력 해 주세요.</BlockHeader
    >
  </List>
  <Block outlineIos class="space-y-2">
    <Button large class="k-color-brand-yellow" onClick={didTapRequest}>정보 가져오기</Button>
    <RequestScrap {requestScrapInfo} bind:this={requestScrap} />
  </Block>
  <Dialog opened={requestScrapInfo.status === "failed"} backdrop="false">
    <svelte:fragment slot="title">간편인증에 실패했어요. 😭</svelte:fragment>
    {requestScrapInfo.errorMessage}
    <svelte:fragment slot="buttons">
      <DialogButton
        onClick={() => {
          requestScrapInfo.parameter = undefined;
          requestScrapInfo.result = undefined;
          requestScrapInfo.status = undefined;
          requestScrapInfo.errorMessage = undefined;
          // TODO : stop
        }}
      >
        확인
      </DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog opened={requestScrapInfo.status === "loading"} backdrop="false">
    <svelte:fragment slot="title">정보를 불러오는 중이에요...</svelte:fragment>
    <Block />
    <SpinLoader {loader} />
  </Dialog>

  <Dialog opened={requestScrapInfo.status === "success"} backdrop="false">
    <svelte:fragment slot="title">사용자님의 정보를 정상적으로 불러 왔어요. 🙂</svelte:fragment>
    {"내 정보내 정보내 정보내 정보내 정보내 정보"}
    <svelte:fragment slot="buttons">
      <DialogButton
        onClick={() => {
          let parsedQuery = parse(requestProfileInfo) ?? {};
          let route = routes.filter((route) => route.title == "Profile Setup")[0];
          replace(`${route.path}?${stringify(parsedQuery)}`);
        }}
      >
        확인
      </DialogButton>
    </svelte:fragment>
  </Dialog>
</Page>
