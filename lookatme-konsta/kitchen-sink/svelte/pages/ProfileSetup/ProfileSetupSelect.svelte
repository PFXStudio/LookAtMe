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
  import { push, pop, replace } from "svelte-spa-router";

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
  let tall = { value: "1", changed: false };
  let education = { value: "1", changed: false, title: "최종학력" };
  let body = { value: "1", changed: false, title: "체형" };
  let blood = { value: "1", changed: false, title: "혈액형" };
  let religion = { value: "1", changed: false, title: "종교" };
  let drink = { value: "1", changed: false, title: "음주" };
  let smoking = { value: "1", changed: false, title: "흡연" };
  let didTapEducationButton = false;
  let didTapBodyButton = false;
  let didTapBloodButton = false;
  let didTapReligionButton = false;
  let didTapDrinkButton = false;
  let didTapSmokingButton = false;

  function didTapNext() {
    if (tall.value.length <= 0) {
      tall.changed = true;
      return;
    }
    if (education.value.length <= 0) {
      education.changed = true;
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

    requestProfileSetupInfo.parameter.tall = tall.value;
    requestProfileSetupInfo.parameter.education = education.value;
    requestProfileSetupInfo.parameter.body = body.value;
    requestProfileSetupInfo.parameter.blood = blood.value;
    requestProfileSetupInfo.parameter.religion = religion.value;
    requestProfileSetupInfo.parameter.drink = drink.value;
    requestProfileSetupInfo.parameter.smoking = smoking.value;

    let route = `#${routes.filter((route) => route.title == "Profile Pre View")[0].path}`;
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
    <BlockHeader
      >{tall.changed && !tall.value.trim()
        ? "키를 정학하게 설정 해 주세요."
        : "키를 설정 해 주세요."}
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

    <BlockHeader
      >{education.changed && !education.value.trim()
        ? "최종학력을 정학하게 입력 해 주세요."
        : "최종학력을 입력 해 주세요."}</BlockHeader
    >

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapEducationButton = true)}>{education.title}</Button>
    </Block>

    <BlockHeader
      >{body.changed && !body.value.trim()
        ? "체형을 정학하게 설정 해 주세요."
        : "체형을 설정 해 주세요."}</BlockHeader
    >

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapBodyButton = true)}>{body.title}</Button>
    </Block>

    <BlockHeader
      >{blood.changed && !blood.value.trim()
        ? "혈액형을 정학하게 설정 해 주세요."
        : "혈액형을 설정 해 주세요."}</BlockHeader
    >

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapBloodButton = true)}>{blood.title}</Button>
    </Block>

    <BlockHeader
      >{religion.changed && !religion.value.trim()
        ? "종교를 정학하게 선택 해 주세요."
        : "종교를 선택 해 주세요."}
    </BlockHeader>

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapReligionButton = true)}>{religion.title}</Button>
    </Block>

    <BlockHeader
      >{drink.changed && !drink.value.trim()
        ? "음주를 정학하게 선택 해 주세요."
        : "음주를 선택 해 주세요."}
    </BlockHeader>

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapDrinkButton = true)}>{drink.title}</Button>
    </Block>

    <BlockHeader
      >{smoking.changed && !smoking.value.trim()
        ? "흡연을 정학하게 선택 해 주세요."
        : "흡연을 선택 해 주세요."}
    </BlockHeader>

    <Block strong inset class="flex space-x-4">
      <Button onClick={() => (didTapSmokingButton = true)}>{smoking.title}</Button>
    </Block>

    <Block outlineIos class="space-y-2">
      <Button large class="k-color-brand-yellow" onClick={didTapNext}>다음</Button>
    </Block>
  </List>
  <Actions opened={didTapBodyButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "마른", changed: true, title: "마른" };
        }}
      >
        마른
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "슬림 근육", changed: true, title: "슬림 근육" };
        }}
      >
        슬림 근육
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "보통", changed: true, title: "보통" };
        }}
      >
        보통
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "통통", changed: true, title: "통통" };
        }}
      >
        통통
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "근육질", changed: true, title: "근육질" };
        }}
      >
        근육질
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBodyButton = false;
          body = { value: "건장한", changed: true, title: "건장한" };
        }}
      >
        건장한
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapBloodButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapBloodButton = false;
          blood = { value: "A형", changed: true, title: "A형" };
        }}
      >
        A형
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBloodButton = false;
          blood = { value: "B형", changed: true, title: "B형" };
        }}
      >
        B형
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBloodButton = false;
          blood = { value: "AB형", changed: true, title: "AB형" };
        }}
      >
        AB형
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapBloodButton = false;
          blood = { value: "O형", changed: true, title: "O형" };
        }}
      >
        O형
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapEducationButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapEducationButton = false;
          education = { value: "대학교 재학", changed: true, title: "대학교 재학" };
        }}
      >
        대학교 재학
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapEducationButton = false;
          education = { value: "대학교 졸업", changed: true, title: "대학교 졸업" };
        }}
      >
        대학교 졸업
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapEducationButton = false;
          education = { value: "대학원 재학", changed: true, title: "대학원 재학" };
        }}
      >
        대학원 재학
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapEducationButton = false;
          education = { value: "대학원 졸업", changed: true, title: "대학원 졸업" };
        }}
      >
        대학원 졸업
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapEducationButton = false;
          education = { value: "기타", changed: true, title: "기타" };
        }}
      >
        기타
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapReligionButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "무교", changed: true, title: "무교" };
        }}
      >
        무교
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "기독교", changed: true, title: "기독교" };
        }}
      >
        기독교
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "천주교", changed: true, title: "천주교" };
        }}
      >
        천주교
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "불교", changed: true, title: "불교" };
        }}
      >
        불교
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "원불교", changed: true, title: "원불교" };
        }}
      >
        원불교
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapReligionButton = false;
          religion = { value: "기타", changed: true, title: "기타" };
        }}
      >
        기타
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapDrinkButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "전혀 마시지 못함", changed: true, title: "전혀 마시지 못함" };
        }}
      >
        전혀 마시지 못함
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "어쩔 수 없을 때만", changed: true, title: "어쩔 수 없을 때만" };
        }}
      >
        어쩔 수 없을 때만
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "가끔 마심", changed: true, title: "가끔 마심" };
        }}
      >
        가끔 마심
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "어느 정도 즐김", changed: true, title: "어느 정도 즐김" };
        }}
      >
        어느 정도 즐김
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapDrinkButton = false;
          drink = { value: "술자리를 즐김", changed: true, title: "술자리를 즐김" };
        }}
      >
        술자리를 즐김
      </ActionsButton>
    </ActionsGroup>
  </Actions>

  <Actions opened={didTapSmokingButton} backdrop="false">
    <ActionsGroup>
      <ActionsButton
        onClick={() => {
          didTapSmokingButton = false;
          smoking = { value: "금연", changed: true, title: "금연" };
        }}
      >
        금연
      </ActionsButton>
      <ActionsButton
        onClick={() => {
          didTapSmokingButton = false;
          smoking = { value: "흡연", changed: true, title: "흡연" };
        }}
      >
        흡연
      </ActionsButton>
    </ActionsGroup>
  </Actions>
</Page>
