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
    Dialog,
    DialogButton,
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";
  import RequestProfileSetup from "../../usecases/RequestProfileSetup.svelte";
  import routes from "../../routes.js";
  import SpinLoader from "../Commons/SpinLoader.svelte";
  import { push, pop, replace } from "svelte-spa-router";

  const isPreview = document.location.href.includes("examplePreview");
  let nickname = { value: "1", changed: false };
  let tall = { value: "1", changed: false };
  let region = { value: "1", changed: false };
  let job = { value: "1999", changed: false };
  let education = { value: "1", changed: false };
  let body = { value: "1", changed: false };
  let blood = { value: "1", changed: false };
  let religion = { value: "1", changed: false };
  let drink = { value: "1", changed: false };
  let smoking = { value: "1", changed: false };
  let introduce = { value: "1", changed: false };
  let requestProfileSetupInfo = {
    parameter: undefined,
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
  };
  let requestProfileSetup = undefined;
  let loader = undefined;

  const onChangedNickname = (e) => {
    nickname = { value: e.target.value, changed: true };
  };
  const onChangedTall = (e) => {
    tall = { value: e.target.value, changed: true };
  };
  const onChangedRegion = (e) => {
    region = { value: e.target.value, changed: true };
  };
  const onChangedJob = (e) => {
    job = { value: e.target.value, changed: true };
  };
  const onChangedEducation = (e) => {
    education = { value: e.target.value, changed: true };
  };
  const onChangedBody = (e) => {
    body = { value: e.target.value, changed: true };
  };
  const onChangedBlood = (e) => {
    blood = { value: e.target.value, changed: true };
  };
  const onChangedReligion = (e) => {
    religion = { value: e.target.value, changed: true };
  };
  const onChangedDrink = (e) => {
    drink = { value: e.target.value, changed: true };
  };
  const onChangedSmoking = (e) => {
    smoking = { value: e.target.value, changed: true };
  };
  const onChangedIntroduce = (e) => {
    introduce = { value: e.target.value, changed: true };
  };

  function didTapRequest() {
    if (nickname.value.length <= 0) {
      nickname.changed = true;
      return;
    }
    if (tall.value.length <= 0) {
      tall.changed = true;
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
    if (introduce.value.length <= 0) {
      introduce.changed = true;
      return;
    }

    requestProfileSetupInfo.parameter = {
      nickname: nickname.value,
      tall: tall.value,
      region: region.value,
      job: job.value,
      education: education.value,
      body: body.value,
      blood: blood.value,
      religion: religion.value,
      drink: drink.value,
      smoking: smoking.value,
      introduce: introduce.value,
    };
    requestProfileSetupInfo.status = "loading";
    requestProfileSetup.request(() => {
      console.log("callback");
      if (requestProfileSetupInfo.result !== undefined) {
        requestProfileSetupInfo.status = "success";
      } else {
        requestProfileSetupInfo.status = "failed";
      }
    });
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

    <ListInput
      outline
      label="키"
      type="text"
      placeholder="키를 입력 해 주세요."
      value={tall.value}
      error={tall.changed && !tall.value.trim() ? "키를 정학하게 입력 해 주세요." : ""}
      onInput={onChangedTall}
    >
      <DemoIcon slot="media" />
    </ListInput>

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
      label="최종학력"
      type="text"
      placeholder="최종학력을 입력 해 주세요."
      value={education.value}
      error={education.changed && !education.value.trim()
        ? "최종학력을 정학하게 입력 해 주세요."
        : ""}
      onInput={onChangedEducation}
    >
      <DemoIcon slot="media" />
    </ListInput>
    <ListInput
      outline
      label="체형"
      type="text"
      placeholder="체형을 입력 해 주세요."
      value={body.value}
      error={body.changed && !body.value.trim() ? "체형을 정학하게 입력 해 주세요." : ""}
      onInput={onChangedBody}
    >
      <DemoIcon slot="media" />
    </ListInput>
    <ListInput
      outline
      label="혈액형"
      type="text"
      placeholder="혈액형을 입력 해 주세요."
      value={blood.value}
      error={blood.changed && !blood.value.trim() ? "혈액형을 정학하게 입력 해 주세요." : ""}
      onInput={onChangedBlood}
    >
      <DemoIcon slot="media" />
    </ListInput>
    <ListInput
      outline
      label="종교"
      type="text"
      placeholder="종교를 입력 해 주세요."
      value={religion.value}
      error={religion.changed && !religion.value.trim() ? "종교를 정학하게 입력 해 주세요." : ""}
      onInput={onChangedReligion}
    >
      <DemoIcon slot="media" />
    </ListInput>
    <ListInput
      outline
      label="음주"
      type="text"
      placeholder="음주를 입력 해 주세요."
      value={drink.value}
      error={drink.changed && !drink.value.trim() ? "음주를 정학하게 입력 해 주세요." : ""}
      onInput={onChangedDrink}
    >
      <DemoIcon slot="media" />
    </ListInput>
    <ListInput
      outline
      label="흡연"
      type="text"
      placeholder="흡연을 입력 해 주세요."
      value={smoking.value}
      error={smoking.changed && !smoking.value.trim() ? "흡연을 정학하게 입력 해 주세요." : ""}
      onInput={onChangedSmoking}
    >
      <DemoIcon slot="media" />
    </ListInput>
    <ListInput
      outline
      label="자기소개"
      type="text"
      placeholder="자기소개를 입력 해 주세요."
      value={introduce.value}
      error={introduce.changed && !introduce.value.trim()
        ? "자기소개를 100자 이상 입력 해 주세요."
        : ""}
      onInput={onChangedIntroduce}
    >
      <DemoIcon slot="media" />
    </ListInput>
  </List>
  <Block outlineIos class="space-y-2">
    <Button large class="k-color-brand-yellow" onClick={didTapRequest}>프로필 정보 설정하기</Button>
    <RequestProfileSetup {requestProfileSetupInfo} bind:this={requestProfileSetup} />
  </Block>
  <Dialog opened={requestProfileSetupInfo.status === "failed"} backdrop="false">
    <svelte:fragment slot="title">프로필 설정에 실패했어요. 😭</svelte:fragment>
    {requestProfileSetupInfo.errorMessage}
    <svelte:fragment slot="buttons">
      <DialogButton
        onClick={() => {
          requestProfileSetupInfo.parameter = undefined;
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
    <svelte:fragment slot="title">정보를 불러오는 중이에요...</svelte:fragment>
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
