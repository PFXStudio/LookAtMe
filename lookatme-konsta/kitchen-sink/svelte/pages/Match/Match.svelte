<script>
  import { Page, Navbar, Icon, Link, Tabbar, TabbarLink } from "konsta/svelte";
  import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/svelte";
  import LookAtMeIcon from "../../components/Icons/LookAtMeIcon.svelte";
  import MatchIcon from "../../components/Icons/MatchIcon.svelte";
  import NoticeIcon from "../../components/Icons/NoticeIcon.svelte";
  import SetupIcon from "../../components/Icons/SetupIcon.svelte";
  import Scrap from "../Scrap/Scrap.svelte";
  import MatchCardList from "./MatchList/MatchCardList.svelte";
  import MatchRequestCardList from "./MatchList/MatchRequestCardList.svelte";
</script>

<Page>
  <Navbar title="LookAtMe">
    <Link navbar iconOnly slot="right" />
  </Navbar>
  <!-- svelte-ignore missing-declaration -->
  <MatchCardList />
  <MatchRequestCardList />
</Page>
