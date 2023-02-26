<script>
  import { Page, Navbar, Icon, Link, Tabbar, TabbarLink } from "konsta/svelte";
  import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/svelte";
  import LookAtMeIcon from "../../components/Icons/LookAtMeIcon.svelte";
  import MatchIcon from "../../components/Icons/MatchIcon.svelte";
  import NoticeIcon from "../../components/Icons/NoticeIcon.svelte";
  import SetupIcon from "../../components/Icons/SetupIcon.svelte";
  import Scrap from "../Scrap/Scrap.svelte";
  import MatchingList from "./MatchingList.svelte";
  import FetchMatchList from "../../usecases/FetchMatchList.svelte";

  let fetchMatchList = undefined;
  let fetchMatchListInfo = {
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
    status: undefined, // success, failed, loading
    result: undefined,
    errorMessage: undefined,
  };

  async function fetchData() {
    const res = await fetch("");
    // const data = await res.json();
    fetchMatchList.request(() => {
      console.log(fetchMatchListInfo.parameter);
      if (fetchMatchListInfo.result !== undefined) {
        fetchMatchListInfo.status = "success";
      } else {
        fetchMatchListInfo.status = "failed";
      }
    });

    return "";
  }
</script>

<Page>
  <Navbar title="LookAtMe">
    <Link navbar iconOnly slot="right" />
  </Navbar>
  <FetchMatchList {fetchMatchListInfo} bind:this={fetchMatchList} />

  {#if fetchMatchListInfo.result}
    <MatchingList fetchMatchListInfo={fetchMatchListInfo}/>
  {/if}

  {#await fetchData()}{/await}
</Page>
