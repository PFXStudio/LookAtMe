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
  import BloodFillIcon from "../../components/Icons/BloodFillIcon.svelte";
  import BodyFillIcon from "../../components/Icons/BodyFillIcon.svelte";
  import DrinkFillIcon from "../../components/Icons/DrinkFillIcon.svelte";
  import GraduationFillIcon from "../../components/Icons/GraduationFillIcon.svelte";
  import IntroduceFillIcon from "../../components/Icons/IntroduceFillIcon.svelte";
  import JobFillIcon from "../../components/Icons/JobFillIcon.svelte";
  import NicknameFillIcon from "../../components/Icons/NicknameFillIcon.svelte";
  import RegionFillIcon from "../../components/Icons/RegionFillIcon.svelte";
  import ReligionFillIcon from "../../components/Icons/ReligionFillIcon.svelte";
  import SmokingFillIcon from "../../components/Icons/SmokingFillIcon.svelte";
  import TallFillIcon from "../../components/Icons/TallFillIcon.svelte";

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
    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <NicknameFillIcon slot="ios" class="w-7 h-7" />
        <NicknameFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="별명" after={requestProfileSetupInfo.parameter.nickname} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <TallFillIcon slot="ios" class="w-7 h-7" />
        <TallFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="키" after={requestProfileSetupInfo.parameter.tall} />
        </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <RegionFillIcon slot="ios" class="w-7 h-7" />
        <RegionFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="지역" after={requestProfileSetupInfo.parameter.region} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <JobFillIcon slot="ios" class="w-7 h-7" />
        <JobFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="직업" after={requestProfileSetupInfo.parameter.job} />
        </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <GraduationFillIcon slot="ios" class="w-7 h-7" />
        <GraduationFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="최종학력" after={requestProfileSetupInfo.parameter.graduation} />
        </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <BodyFillIcon slot="ios" class="w-7 h-7" />
        <BodyFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="체형" after={requestProfileSetupInfo.parameter.body} />
        </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <BloodFillIcon slot="ios" class="w-7 h-7" />
        <BloodFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="혈액형" after={requestProfileSetupInfo.parameter.blood} />
        </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <ReligionFillIcon slot="ios" class="w-7 h-7" />
        <ReligionFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="종교" after={requestProfileSetupInfo.parameter.religion} />
        </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <DrinkFillIcon slot="ios" class="w-7 h-7" />
        <DrinkFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="음주" after={requestProfileSetupInfo.parameter.drink} />
        </div>
    </div>
    
    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <SmokingFillIcon slot="ios" class="w-7 h-7" />
        <SmokingFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="흡연" after={requestProfileSetupInfo.parameter.smoking} />
        </div>
    </div>
    
    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <IntroduceFillIcon slot="ios" class="w-7 h-7" />
        <IntroduceFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="자기소개" after={requestProfileSetupInfo.parameter.introduce} />
        </div>
    </div>
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
