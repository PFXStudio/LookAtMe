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
    Link,
    Panel,
    MenuList,
    MenuListItem,
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";
  import RequestProfileSetup from "../../usecases/RequestProfileSetup.svelte";
  import routes from "../../routes.js";
  import SpinLoader from "../Commons/SpinLoader.svelte";
  import MoreIcon from "../../components/Icons/MoreIcon.svelte";
  import CloseFillIcon from "../../components/Icons/CloseFillIcon.svelte";
  import CompanyNameFillIcon from "../../components/Icons/CompanyNameFillIcon.svelte";
  import SalaryFillIcon from "../../components/Icons/SalaryFillIcon.svelte";
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
    replace,
  } from "svelte-spa-router";

  import { parse, stringify } from "qs";

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
  };

  $: parsedQuery = parse($querystring) ?? {};

  // Set someVariableStore if found in query param
  $: {
    console.log(parsedQuery);
    let parameter = parsedQuery.parameter;
    if (parameter) {
      requestProfileInfo.parameter = parameter;
    }

    let entryPoint = parsedQuery.entryPoint;
    if (entryPoint) {
      requestProfileInfo.entryPoint = entryPoint;
    }
  }

  let requestProfileSetup = undefined;
  let loader = undefined;
  let isOpenMoreMenu = false;
  let selectedOpenMoreMenu = "none";
  function didTapRequest() {
    requestProfileInfo.status = "loading";
    requestProfileSetup.request(() => {
      if (requestProfileInfo.result !== undefined) {
        requestProfileInfo.status = "success";
      } else {
        requestProfileInfo.status = "failed";
      }
    });
  }
</script>

<Page>
  <Navbar title="????????? ??????">
    <svelte:fragment slot="left">
      <NavbarBackLink
        onClick={() => {
          console.log(">>> didTap back");
          history.back();
        }}
      />
    </svelte:fragment>
    <svelte:fragment slot="right">
      {#if requestProfileInfo.entryPoint === "lookerProfile"}
        <Link slot="right" navbar onClick={() => (isOpenMoreMenu = true)}>
          <div>
            <MoreIcon slot="ios" class="w-7 h-7" />
          </div>
        </Link>
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
        <ListItem title="??????" after={requestProfileInfo.parameter.nickname} />
      </div>
    </div>
    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <CompanyNameFillIcon slot="ios" class="w-7 h-7" />
        <CompanyNameFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="?????????" after={requestProfileInfo.parameter.companyName} />
      </div>
    </div>
    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <SalaryFillIcon slot="ios" class="w-7 h-7" />
        <SalaryFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="??????" after={requestProfileInfo.parameter.salary} />
      </div>
    </div>
    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <TallFillIcon slot="ios" class="w-7 h-7" />
        <TallFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="???" after={requestProfileInfo.parameter.tall} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <RegionFillIcon slot="ios" class="w-7 h-7" />
        <RegionFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="??????" after={requestProfileInfo.parameter.region} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <JobFillIcon slot="ios" class="w-7 h-7" />
        <JobFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="??????" after={requestProfileInfo.parameter.job} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <GraduationFillIcon slot="ios" class="w-7 h-7" />
        <GraduationFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="????????????" after={requestProfileInfo.parameter.graduation} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <BodyFillIcon slot="ios" class="w-7 h-7" />
        <BodyFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="??????" after={requestProfileInfo.parameter.body} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <BloodFillIcon slot="ios" class="w-7 h-7" />
        <BloodFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="?????????" after={requestProfileInfo.parameter.blood} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <ReligionFillIcon slot="ios" class="w-7 h-7" />
        <ReligionFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="??????" after={requestProfileInfo.parameter.religion} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <DrinkFillIcon slot="ios" class="w-7 h-7" />
        <DrinkFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="??????" after={requestProfileInfo.parameter.drink} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <SmokingFillIcon slot="ios" class="w-7 h-7" />
        <SmokingFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="w-full mr-4">
        <ListItem title="??????" after={requestProfileInfo.parameter.smoking} />
      </div>
    </div>

    <div class="flex items-center ml-4 mr-4 w-full">
      <Icon slot="icon">
        <IntroduceFillIcon slot="ios" class="w-7 h-7" />
        <IntroduceFillIcon slot="material" class="w-6 h-6" />
      </Icon>
      <div class="flex w-full mr-4">
        <ListItem title="????????????" />
      </div>
    </div>
    <span class="text ml-4 mr-4" labelText>{requestProfileInfo.parameter.introduce} </span>
  </List>

  {#if requestProfileInfo.entryPoint !== "lookerProfile"}
    <Block outlineIos class="space-y-2">
      <Button large class="k-color-brand-yellow" onClick={didTapRequest}
        >????????? ?????? ????????????</Button
      >
      <RequestProfileSetup {requestProfileInfo} bind:this={requestProfileSetup} />
    </Block>
  {/if}

  <Dialog opened={requestProfileInfo.status === "failed"} backdrop="false">
    <svelte:fragment slot="title">????????? ?????? ????????? ???????????????. ????</svelte:fragment>
    {requestProfileInfo.errorMessage}
    <svelte:fragment slot="buttons">
      <DialogButton
        onClick={() => {
          requestProfileInfo.result = undefined;
          requestProfileInfo.status = undefined;
          requestProfileInfo.errorMessage = undefined;
          // TODO : stop
        }}
      >
        ??????
      </DialogButton>
    </svelte:fragment>
  </Dialog>
  <Dialog opened={requestProfileInfo.status === "loading"} backdrop="false">
    <svelte:fragment slot="title">????????? ???????????? ????????????...</svelte:fragment>
    <Block />
    <SpinLoader {loader} />
  </Dialog>

  <Dialog opened={requestProfileInfo.status === "success"} backdrop="false">
    <svelte:fragment slot="title">????????? ????????? ??????????????? ???????????????. ????</svelte:fragment>
    {"??? ????????? ????????? ????????? ????????? ????????? ??????"}
    <svelte:fragment slot="buttons">
      <DialogButton
        onClick={() => {
          if (requestProfileInfo.entryPoint === "signup") {
            // loggined
            console.log(">>> to main");
            let route = routes.filter((route) => route.title == "Main")[0];
            replace(`${route.path}?${stringify(parsedQuery)}`);
          } else {
            console.log(">>> back");
            history.back();
          }
        }}
      >
        ??????
      </DialogButton>
    </svelte:fragment>
  </Dialog>

  <Panel
    side="right"
    floating
    opened={isOpenMoreMenu}
    onBackdropClick={() => (isOpenMoreMenu = false)}
  >
    <Page className="no-safe-areas-top no-safe-areas-bottom">
      <Navbar title="??? ??????">
        <Link slot="right" navbar onClick={() => (isOpenMoreMenu = false)}>
          <div>
            <CloseFillIcon slot="ios" class="w-7 h-7" />
          </div>
        </Link>
      </Navbar>
      <MenuList>
        <MenuListItem title="???? ????????????" onClick={() => (selectedOpenMoreMenu = "report")} />
      </MenuList>
    </Page>
  </Panel>

  <Dialog opened={selectedOpenMoreMenu === "report"} backdrop="false">
    <svelte:fragment slot="title"
      >{requestProfileInfo.parameter.nickname} ???????????? ?????? ???????????????? ????</svelte:fragment
    >
    {"????????? ???????????? ?????? ???????????? ?????????."}
    <svelte:fragment slot="buttons">
      <DialogButton
        onClick={() => {
          selectedOpenMoreMenu = "";
        }}
      >
        ??????
      </DialogButton>
      <DialogButton
        onClick={() => {
          selectedOpenMoreMenu = "";
          history.back();
        }}
      >
        ??????
      </DialogButton>
    </svelte:fragment>
  </Dialog>
</Page>

<style>
  .text {
    display: block;
    width: 92%;
    height: 100%;
    margin-left: 48px;
    margin-bottom: 8px;
  }
</style>
