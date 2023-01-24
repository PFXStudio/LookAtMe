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
    Chip,
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";

  const isPreview = document.location.href.includes("examplePreview");
  let wrongAuthChip = { fillBg: "bg-red-500", fillText: "text-white" };
  let defaultAuthChip = { fillBg: "bg-white-500", fillText: "text-black" };
  let name = { value: "", changed: false };
  let email = { value: "", changed: false };
  let phone = { value: "", changed: false };
  let birthday = { value: "", changed: false };
  let authType = { value: "", changed: false };

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
    if (email.value.length <= 0) {
      email.changed = true;
      return;
    }
    if (phone.value.length <= 0) {
      phone.changed = true;
      return;
    }
    if (birthday.value.length <= 0) {
      birthday.changed = true;
      return;
    }
    console.log(">>> good input");
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

  <BlockTitle>민간인증서를 이용해 고객님의 회원 정보를 불러 올 거에요.</BlockTitle>
  <BlockHeader
  ><b>민간인증서를 선택 해 주세요.</b></BlockHeader
>
  <Block strongIos outlineIos class="space-y-4">
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
  </Block>
</Page>
