<script>
    import {
      Page,
      Navbar,
      Icon,
      Link,
      Tabbar,
      TabbarLink,
    } from 'konsta/svelte';
    import {
      EnvelopeFill,
      Calendar,
      CloudUploadFill,
    } from 'framework7-icons/svelte';
    import LookAtMeIcon from '../../components/Icons/LookAtMeIcon.svelte';
    import MatchIcon from '../../components/Icons/MatchIcon.svelte';
    import NoticeIcon from '../../components/Icons/NoticeIcon.svelte';
    import SetupIcon from '../../components/Icons/SetupIcon.svelte';
    import Scrap from '../Scrap/Scrap.svelte';
  </script>
  
  <Page>
    <Navbar title="LookAtMe">
      <Link navbar iconOnly slot="right">
      </Link>
    </Navbar>
    <!-- svelte-ignore missing-declaration -->
    <Scrap></Scrap>
    <Tabbar labels icons class="left-0 bottom-0 fixed">
      <TabbarLink active label="Looker">
        <Icon slot="icon">
          <EnvelopeFill slot="ios" class="w-7 h-7" />
          <LookAtMeIcon slot="material" class="w-6 h-6" />
        </Icon>
      </TabbarLink>
      <TabbarLink label="Match">
        <Icon slot="icon" >
          <Calendar slot="ios" class="w-7 h-7" />
          <MatchIcon slot="material" class="w-6 h-6" />
        </Icon>
      </TabbarLink>
      <TabbarLink label="Notice">
        <Icon slot="icon" >
          <CloudUploadFill slot="ios" class="w-7 h-7" />
          <NoticeIcon slot="material" class="w-6 h-6" />
        </Icon>
      </TabbarLink>
      <TabbarLink label="Setup">
        <Icon slot="icon" >
          <CloudUploadFill slot="ios" class="w-7 h-7" />
          <SetupIcon slot="material" class="w-6 h-6" />
        </Icon>
      </TabbarLink>
    </Tabbar>
  </Page>
  