<script>
  import { Page, Navbar, Card, Link, Button, TabbarLink, BlockTitle } from "konsta/svelte";
  import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/svelte";
  import FetchNoticeList from "../../usecases/FetchNoticeList.svelte";

  let fetchNoticeListInfo = {
    parameter: {
      index: 0,
    },
    status: undefined, // success, failed, loading
    result: {
      count: undefined,
      list: [
      ]
    },
    errorMessage: undefined,
  };

  let fetchNoticeList = undefined;
  async function doFetch() {
    const res = await fetch("");
    // const data = await res.json();
    fetchNoticeList.request(() => {
      console.log(fetchNoticeListInfo);
      if (fetchNoticeListInfo.result !== undefined) {
        fetchNoticeListInfo.status = "success";
      } else {
        fetchNoticeListInfo.status = "failed";
      }
    });

    return "";
  }
</script>

<Page>
  <Navbar title="LookAtMe">
    <Link navbar iconOnly slot="right" />
  </Navbar>
  <FetchNoticeList {fetchNoticeListInfo} bind:this={fetchNoticeList} />

  <div style={"margin-bottom:6rem"}>
    <BlockTitle withBlock={false}>공지사항 목록이에요.</BlockTitle>
    {#if fetchNoticeListInfo.result}
    <div class="lg:grid lg:grid-cols-2">
      {#each fetchNoticeListInfo.result.list as item}
        <Card>
          <div
            slot="header"
            class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
            style="background-image: url({item.imagePath})"
          >
            {item.title}
          </div>
          <div class="text-gray-500 mb-3">{item.updatedDate}</div>
          <p>
            {item.contents}
          </p>
          <svelte:fragment slot="footer">
            <div class="flex justify-end material:hidden">
              <!-- <Link link href={`#${route.path}`}>{title}</Link> -->
            </div>
            <div class="flex justify-end ios:hidden space-x-2">
              <!-- <Button rounded inline outline link href={`#${route.path}`}>{title}</Button> -->
            </div>
          </svelte:fragment>
        </Card>
      {/each}
    </div>    
    {/if}
    </div>
  
  {#await doFetch()}{/await}
</Page>
