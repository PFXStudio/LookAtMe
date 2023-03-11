<script>
  import {
    Page,
    Navbar,
    BlockTitle,
    Link,
    List,
    ListItem,
    BlockHeader,
    TabbarLink,
  } from "konsta/svelte";
  import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/svelte";
</script>

<Page>
  <Navbar title="LookAtMe">
    <Link navbar iconOnly slot="right" />
  </Navbar>
  <div style={"margin-bottom:6rem margin-top:12rem"}>
    <BlockTitle>앱 설정 목록이에요.</BlockTitle>
    <BlockHeader>계정정보 설정</BlockHeader>
    <List strongIos outlineIos>
      <ListItem title="Link 1" link />
      <ListItem title="Link 2" link />
      <ListItem title="Link 3" link />
    </List>
  </div>
</Page>
