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
  } from "konsta/svelte";

  import DemoIcon from "../../components/DemoIcon.svelte";

  const isPreview = document.location.href.includes("examplePreview");
  let name = { value: "", changed: false };
  let demoValue = "";
  let authType = undefined;
  let actionsTwoOpened = undefined;

  const onNameChange = (e) => {
    name = { value: e.target.value, changed: true };
  };
  const onDemoValueChange = (e) => {
    demoValue = e.target.value;
  };
  const onDemoValueClear = () => {
    demoValue = "";
  };
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
  <Block strongIos outlineIos class="space-y-4">
    <Segmented strong>
      <SegmentedButton strong active={authType === "네이버"} onClick={() => (authType = "네이버")}>
        <svelte:fragment slot="icon">
          <DemoIcon slot="media" />
        </svelte:fragment>

        네이버
      </SegmentedButton>
      <SegmentedButton
        strong
        active={authType === "카카오톡"}
        onClick={() => (authType = "카카오톡")}
      >
        카카오톡
      </SegmentedButton>
      <SegmentedButton strong active={authType === "페이코"} onClick={() => (authType = "페이코")}>
        <svelte:fragment slot="icon">
          <DemoIcon slot="media" />
        </svelte:fragment>
        페이코
      </SegmentedButton>
    </Segmented>
  </Block>

  <List strongIos insetIos>
    <ListInput outline label="이름" type="text" placeholder="이름을 입력 해 주세요.">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput
      outline
      label="생년월일을 입력 해 주세요."
      type="date"
      defaultValue=""
      placeholder="2010-01-01"
    >
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput outline label="핸드폰 번호" type="tel" placeholder="핸드폰 번호를 입력 해 주세요.">
      <DemoIcon slot="media" />
    </ListInput>

    <ListInput outline label="E-mail" type="email" placeholder="E-mail을 입력 해 주세요.">
      <DemoIcon slot="media" />
    </ListInput>

    <BlockTitle
      >E-mail을 통해 고객님의 정보를 찾아 올 수 있어요. 정확하게 입력 해 주세요.</BlockTitle
    >
  </List>
  <Block outlineIos class="space-y-2">
    <Button large class="k-color-brand-yellow">Button</Button>
  </Block>
</Page>
