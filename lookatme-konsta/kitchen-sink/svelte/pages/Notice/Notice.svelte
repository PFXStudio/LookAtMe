<script>
  import { Page, Navbar, List, ListItem, Link, Tabbar, TabbarLink } from "konsta/svelte";
  import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/svelte";
  import FetchNoticeList from "../../usecases/FetchNoticeList.svelte";

  let notices = ["1"];
  let fetchNoticeList = undefined;
  let fetchNoticeListInfo = {
    parameter: undefined,
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
  };

  // fetchNoticeList.request(() => {
  //     if (fetchNoticeListInfo.result !== undefined) {
  //       fetchNoticeListInfo.status = "success";
  //       notices = fetchNoticeListInfo.result;
  //     } else {
  //       fetchNoticeListInfo.status = "failed";
  //     }
  //   });
</script>

<Page>
  <Navbar title="LookAtMe">
    <Link navbar iconOnly slot="right" />
  </Navbar>
  <!-- svelte-ignore missing-declaration -->
  <!-- <BlockTitle>공지사항</BlockTitle> -->
  <!-- <FetchNoticeList {fetchNoticeListInfo} bind:this={fetchNoticeList} /> -->

  <div class="lg:grid lg:grid-cols-2">
    <b>Notice</b>
    <!-- <List strongIos outlineIos>
      {#each notices as notice}
        <ListItem title={notice.title} link />
      {/each}
    </List> -->
  </div>
</Page>
