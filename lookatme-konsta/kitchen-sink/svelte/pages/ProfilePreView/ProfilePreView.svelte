<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    List,
    Block,
    Button,
    Dialog,
    DialogButton,
    ListItem,
    Icon,
    TabbarLink,
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";
  import RequestProfileSetup from "../../usecases/RequestProfileSetup.svelte";
  import routes from "../../routes.js";
  import SpinLoader from "../Commons/SpinLoader.svelte";
  import PinMapFillIcon from "../../components/Icons/PinMapFillIcon.svelte";
  const test = `data:image/svg+xml,${encodeURIComponent(PinMapFillIcon)}`;
  import Router, {
    location, // /bla/blabla/route
    querystring, // /bla?Location=Artworld
    push,
    pop,
    link,
  } from "svelte-spa-router";

  import { parse, stringify } from "qs";

  const isPreview = document.location.href.includes("examplePreview");
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

  $: parsedQuery = parse($querystring) ?? {};

  // Set someVariableStore if found in query param
  $: {
    let parameter = parsedQuery.parameter;
    if (parameter) {
      requestProfileSetupInfo.parameter = parameter;
    }
  }

  console.log(">>> parameter");
  console.log({ requestProfileSetupInfo });

  let requestProfileSetup = undefined;
  let loader = undefined;
  console.log(requestProfileSetupInfo);
  function didTapRequest() {
    requestProfileSetupInfo.status = "loading";
    requestProfileSetup.request(() => {
      console.log("callback");
      // if (requestProfileSetupInfo.result !== undefined) {
      //   requestProfileSetupInfo.status = "success";
      // } else {
      //   requestProfileSetupInfo.status = "failed";
      // }
    });
  }
</script>

<Page>
  <Navbar title="프로필 정보">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <List strongIos outlineIos>
    <ListItem title="별명" after={requestProfileSetupInfo.parameter.nickname} />
    <ListItem title="키" after={requestProfileSetupInfo.parameter.tall}>
      <DemoIcon slot="media" />
    </ListItem>
    <div class="flex flex-row items-center ml-4 mr-4 text-[16px]">
      <Icon slot="icon">
        <PinMapFillIcon slot="ios" class="w-7 h-7" />
        <PinMapFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="flex flex-row justify-between items-center text-[16px] w-full">
        <ListItem title="지역" after={requestProfileSetupInfo.parameter.region} />
      </div>
    </div>

    <ListItem title="직업" after={requestProfileSetupInfo.parameter.job}>
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem title="최종학력" after={requestProfileSetupInfo.parameter.education}>
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem title="체형" after={requestProfileSetupInfo.parameter.body}>
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem title="혈액형" after={requestProfileSetupInfo.parameter.blood}>
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem title="종교" after={requestProfileSetupInfo.parameter.religion}>
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem title="음주" after={requestProfileSetupInfo.parameter.drink}>
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem title="흡연" after={requestProfileSetupInfo.parameter.smoking}>
      <DemoIcon slot="media" />
    </ListItem>
    <ListItem title="자기소개" after={requestProfileSetupInfo.parameter.introduce}>
      <DemoIcon slot="media" />
    </ListItem>
  </List>

  <Block outlineIos class="space-y-2">
    <Button large class="k-color-brand-yellow" onClick={didTapRequest}>프로필 정보 설정하기</Button>
    <RequestProfileSetup {requestProfileSetupInfo} bind:this={requestProfileSetup} />
  </Block>

  <Dialog opened={requestProfileSetupInfo.status === "failed"} backdrop="false">
    <svelte:fragment slot="title">프로필 정보 설정에 실패했어요. 😭</svelte:fragment>
    {requestProfileSetupInfo.errorMessage}
    <svelte:fragment slot="buttons">
      <DialogButton
        onClick={() => {
          requestProfileSetupInfo.result = undefined;
          requestProfileSetupInfo.status = undefined;
          requestProfileSetupInfo.errorMessage = undefined;
          // TODO : stop
        }}
      >
        확인
      </DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog opened={requestProfileSetupInfo.status === "loading"} backdrop="false">
    <svelte:fragment slot="title">정보를 저장하는 중이에요...</svelte:fragment>
    <Block />
    <SpinLoader {loader} />
  </Dialog>

  <Dialog opened={requestProfileSetupInfo.status === "success"} backdrop="false">
    <svelte:fragment slot="title">프로필 정보를 정상적으로 적용했어요. 🙂</svelte:fragment>
    {"내 정보내 정보내 정보내 정보내 정보내 정보"}
    <svelte:fragment slot="buttons">
      <DialogButton
        onClick={() => {
          let route = `#${routes.filter((route) => route.title == "Home")[0].path}`;
          console.log({ route });
          replace(route);
        }}
      >
        확인
      </DialogButton>
    </svelte:fragment>
  </Dialog>
</Page>
