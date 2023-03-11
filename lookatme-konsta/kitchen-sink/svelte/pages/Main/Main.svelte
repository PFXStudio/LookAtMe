<script>
  import { Page, Navbar, Icon, Link, Tabbar, TabbarLink } from "konsta/svelte";
  import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/svelte";
  import LookAtMeIcon from "../../components/Icons/LookAtMeIcon.svelte";
  import MatchIcon from "../../components/Icons/MatchIcon.svelte";
  import NoticeIcon from "../../components/Icons/NoticeIcon.svelte";
  import SetupIcon from "../../components/Icons/SetupIcon.svelte";
  import Scrap from "../Scrap/Scrap.svelte";
  import Match from "../Match/Match.svelte";
  import Notice from "../Notice/Notice.svelte";
  import Setup from "../Setup/Setup.svelte";

  // Looker, Match, Notice, Setup
  let activeTab = "Looker";
  document.documentElement.classList.toggle('dark', true);
</script>

<Page>
  <Navbar title="LookAtMe">
    <Link navbar iconOnly slot="right" />
  </Navbar>
  <!-- svelte-ignore missing-declaration -->
  <Tabbar labels icons class="left-0 bottom-0 fixed">
    <TabbarLink
      active={activeTab === "Looker"}
      onClick={() => (activeTab = "Looker")}
      label="Looker"
    >
      <Icon slot="icon">
        <LookAtMeIcon slot="ios" class="w-7 h-7" />
        <LookAtMeIcon slot="material" class="w-6 h-6" />
      </Icon>
    </TabbarLink>
    <TabbarLink active={activeTab === "Match"} onClick={() => (activeTab = "Match")} label="Match">
      <Icon slot="icon">
        <MatchIcon slot="ios" class="w-7 h-7" />
        <MatchIcon slot="material" class="w-6 h-6" />
      </Icon>
    </TabbarLink>
    <TabbarLink
      active={activeTab === "Notice"}
      onClick={() => (activeTab = "Notice")}
      label="Notice"
    >
      <Icon slot="icon">
        <NoticeIcon slot="ios" class="w-7 h-7" />
        <NoticeIcon slot="material" class="w-6 h-6" />
      </Icon>
    </TabbarLink>
    <TabbarLink active={activeTab === "Setup"} onClick={() => (activeTab = "Setup")} label="Setup">
      <Icon slot="icon">
        <SetupIcon slot="ios" class="w-7 h-7" />
        <SetupIcon slot="material" class="w-6 h-6" />
      </Icon>
    </TabbarLink>
  </Tabbar>

  {#if activeTab === "Looker"}
    {#if true}
      <Scrap />
    {:else}
      <b>false</b>
    {/if}
  {/if}
  {#if activeTab === "Match"}
    <Match></Match>
  {/if}
  {#if activeTab === "Notice"}
  <Notice></Notice>
  {/if}
  {#if activeTab === "Setup"}
  <Setup></Setup>
  {/if}
</Page>
