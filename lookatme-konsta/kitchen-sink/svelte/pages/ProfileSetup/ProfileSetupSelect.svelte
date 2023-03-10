<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    BlockTitle,
    List,
    Block,
    Button,
    BlockHeader,
    ListItem,
    Range,
    Actions,
    ActionsGroup,
    ActionsButton,
  } from "konsta/svelte";

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

  import TallFillIcon from "../../components/Icons/TallFillIcon.svelte";
  import RegionFillIcon from "../../components/Icons/RegionFillIcon.svelte";
  import GraduationFillIcon from "../../components/Icons/GraduationFillIcon.svelte";
  import BodyFillIcon from "../../components/Icons/BodyFillIcon.svelte";
  import BloodFillIcon from "../../components/Icons/BloodFillIcon.svelte";
  import ReligionFillIcon from "../../components/Icons/ReligionFillIcon.svelte";
  import DrinkFillIcon from "../../components/Icons/DrinkFillIcon.svelte";
  import SmokingFillIcon from "../../components/Icons/SmokingFillIcon.svelte";

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
    entryPoint: 'myProfile', // myProfile, signup, lookerProfile
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

  let regionList = ["???????????????", "?????????", "??????", "??????", "??????"];
  let region = { value: "???????????????", changed: false, title: "??????" };
  let tall = { value: "1", changed: false };
  let graduation = { value: "1", changed: false, title: "????????????" };
  let body = { value: "1", changed: false, title: "??????" };
  let blood = { value: "1", changed: false, title: "?????????" };
  let religion = { value: "1", changed: false, title: "??????" };
  let drink = { value: "1", changed: false, title: "??????" };
  let smoking = { value: "1", changed: false, title: "??????" };
  let didTapRegionButton = false;
  let didTapgraduationButton = false;
  let didTapBodyButton = false;
  let didTapBloodButton = false;
  let didTapReligionButton = false;
  let didTapDrinkButton = false;
  let didTapSmokingButton = false;

  function didTapNext() {
    if (region.value.length <= 0) {
      region.changed = true;
      return;
    }
    if (tall.value.length <= 0) {
      tall.changed = true;
      return;
    }
    if (graduation.value.length <= 0) {
      graduation.changed = true;
      return;
    }
    if (body.value.length <= 0) {
      body.changed = true;
      return;
    }
    if (blood.value.length <= 0) {
      blood.changed = true;
      return;
    }
    if (religion.value.length <= 0) {
      religion.changed = true;
      return;
    }
    if (drink.value.length <= 0) {
      drink.changed = true;
      return;
    }
    if (smoking.value.length <= 0) {
      smoking.changed = true;
      return;
    }

    requestProfileInfo.parameter.region = region.value;
    requestProfileInfo.parameter.tall = tall.value;
    requestProfileInfo.parameter.graduation = graduation.value;
    requestProfileInfo.parameter.body = body.value;
    requestProfileInfo.parameter.blood = blood.value;
    requestProfileInfo.parameter.religion = religion.value;
    requestProfileInfo.parameter.drink = drink.value;
    requestProfileInfo.parameter.smoking = smoking.value;

    let parsedQuery = parse(requestProfileInfo) ?? {};
    let route = routes.filter((route) => route.title == "Profile Pre View")[0];
    push(`${route.path}?${stringify(parsedQuery)}`);
  }
</script>

<Page>
  <Navbar title="????????? ?????? ????????????">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>???????????? ????????? ????????? ????????? ?????? ??? ?????????.</BlockTitle>
  <BlockHeader>
    <div class="flex mr-2">
      <TallFillIcon />
    </div>
    {tall.changed && !tall.value.trim() ? "?????? ???????????? ?????? ??? ?????????." : "?????? ?????? ??? ?????????."}
    {tall.value}cm
  </BlockHeader>

  <List strong insetMaterial outlineIos>
    <ListItem innerClass="flex space-x-4">
      <svelte:fragment slot="inner">
        <span>100cm</span>
        <Range
          value={tall.value}
          step={1}
          min={100}
          max={230}
          onInput={(e) => (tall.value = e.target.value)}
        />
        <span>230cm</span>
      </svelte:fragment>
    </ListItem>
  </List>

  <List strongIos insetIos>
    <BlockHeader>
      <div class="flex mr-2">
        <RegionFillIcon />
      </div>
      {region.changed && !region.value.trim()
        ? "????????? ???????????? ?????? ??? ?????????."
        : "????????? ?????? ??? ?????????."}</BlockHeader
    >

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapRegionButton = true)}>{region.title}</Button>
    </Block>

    <BlockHeader>
      <div class="flex mr-2">
        <GraduationFillIcon />
      </div>
      {graduation.changed && !graduation.value.trim()
        ? "??????????????? ???????????? ?????? ??? ?????????."
        : "??????????????? ?????? ??? ?????????."}</BlockHeader
    >

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapgraduationButton = true)}>{graduation.title}</Button>
    </Block>

    <BlockHeader>
      <div class="flex mr-2">
        <BodyFillIcon />
      </div>
      {body.changed && !body.value.trim()
        ? "????????? ???????????? ?????? ??? ?????????."
        : "????????? ?????? ??? ?????????."}</BlockHeader
    >

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapBodyButton = true)}>{body.title}</Button>
    </Block>

    <BlockHeader>
      <div class="flex mr-2">
        <BloodFillIcon />
      </div>
      {blood.changed && !blood.value.trim()
        ? "???????????? ???????????? ?????? ??? ?????????."
        : "???????????? ?????? ??? ?????????."}</BlockHeader
    >

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapBloodButton = true)}>{blood.title}</Button>
    </Block>

    <BlockHeader>
      <div class="flex mr-2">
        <ReligionFillIcon />
      </div>
      {religion.changed && !religion.value.trim()
        ? "????????? ???????????? ?????? ??? ?????????."
        : "????????? ?????? ??? ?????????."}
    </BlockHeader>

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapReligionButton = true)}>{religion.title}</Button>
    </Block>

    <BlockHeader>
      <div class="flex mr-2">
        <DrinkFillIcon />
      </div>
      {drink.changed && !drink.value.trim()
        ? "????????? ???????????? ?????? ??? ?????????."
        : "????????? ?????? ??? ?????????."}
    </BlockHeader>

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapDrinkButton = true)}>{drink.title}</Button>
    </Block>

    <BlockHeader>
      <div class="flex mr-2">
        <SmokingFillIcon />
      </div>
      {smoking.changed && !smoking.value.trim()
        ? "????????? ???????????? ?????? ??? ?????????."
        : "????????? ?????? ??? ?????????."}
    </BlockHeader>

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapSmokingButton = true)}>{smoking.title}</Button>
    </Block>

    <Block outlineIos class="space-y-2">
      <Button large class="k-color-brand-yellow" onClick={didTapNext}>??????</Button>
    </Block>
  </List>

  <Actions opened={didTapRegionButton} backdrop="false">
    <ActionsGroup>
      {#each regionList as item}
        <ActionsButton
          onClick={() => {
            didTapRegionButton = false;
            console.log(item);
            region = { value: item, changed: true, title: item };
          }}
        >
          {item}
        </ActionsButton>
      {/each}
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapBodyButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "?????? ??????", changed: true, title: "?????? ??????" };
        }}
      >
        ?????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "?????????", changed: true, title: "?????????" };
        }}
      >
        ?????????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "?????????", changed: true, title: "?????????" };
        }}
      >
        ?????????
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapBloodButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapBloodButton = false;
          blood = { value: "A???", changed: true, title: "A???" };
        }}
      >
        A???
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBloodButton = false;
          blood = { value: "B???", changed: true, title: "B???" };
        }}
      >
        B???
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBloodButton = false;
          blood = { value: "AB???", changed: true, title: "AB???" };
        }}
      >
        AB???
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBloodButton = false;
          blood = { value: "O???", changed: true, title: "O???" };
        }}
      >
        O???
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapgraduationButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapgraduationButton = false;
          graduation = { value: "????????? ??????", changed: true, title: "????????? ??????" };
        }}
      >
        ????????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapgraduationButton = false;
          graduation = { value: "????????? ??????", changed: true, title: "????????? ??????" };
        }}
      >
        ????????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapgraduationButton = false;
          graduation = { value: "????????? ??????", changed: true, title: "????????? ??????" };
        }}
      >
        ????????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapgraduationButton = false;
          graduation = { value: "????????? ??????", changed: true, title: "????????? ??????" };
        }}
      >
        ????????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapgraduationButton = false;
          graduation = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapReligionButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "?????????", changed: true, title: "?????????" };
        }}
      >
        ?????????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "?????????", changed: true, title: "?????????" };
        }}
      >
        ?????????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "?????????", changed: true, title: "?????????" };
        }}
      >
        ?????????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapDrinkButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "?????? ????????? ??????", changed: true, title: "?????? ????????? ??????" };
        }}
      >
        ?????? ????????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "?????? ??? ?????? ??????", changed: true, title: "?????? ??? ?????? ??????" };
        }}
      >
        ?????? ??? ?????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "?????? ??????", changed: true, title: "?????? ??????" };
        }}
      >
        ?????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "?????? ?????? ??????", changed: true, title: "?????? ?????? ??????" };
        }}
      >
        ?????? ?????? ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "???????????? ??????", changed: true, title: "???????????? ??????" };
        }}
      >
        ???????????? ??????
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapSmokingButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapSmokingButton = false;
          smoking = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapSmokingButton = false;
          smoking = { value: "??????", changed: true, title: "??????" };
        }}
      >
        ??????
      </ActionsButton>
    </ActionsGroup>
  </Actions>
</Page>
