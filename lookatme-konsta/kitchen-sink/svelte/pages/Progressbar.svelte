<script>
  import {
    Page,
    Navbar,
    NavbarBackLink,
    Block,
    BlockTitle,
    Progressbar,
    Segmented,
    SegmentedButton,
  } from 'konsta/svelte';

  const isPreview = document.location.href.includes('examplePreview');
  let progress = 0.1;
</script>

<Page>
  <Navbar title="Progressbar">
    <svelte:fragment slot="left">
      {#if !isPreview}
        <NavbarBackLink onClick={() => history.back()} />
      {/if}
    </svelte:fragment>
  </Navbar>

  <BlockTitle>Determinate Progress Bar</BlockTitle>
  <Block strong insetMaterial outlineIos>
    <div class="my-4">
      <Progressbar {progress} />
    </div>
    <Segmented raised>
      <SegmentedButton
        active={progress === 0.1}
        onClick={() => (progress = 0.1)}
      >
        10%
      </SegmentedButton>
      <SegmentedButton
        active={progress === 0.3}
        onClick={() => (progress = 0.3)}
      >
        30%
      </SegmentedButton>
      <SegmentedButton
        active={progress === 0.5}
        onClick={() => (progress = 0.5)}
      >
        50%
      </SegmentedButton>
      <SegmentedButton
        active={progress === 1.0}
        onClick={() => (progress = 1.0)}
      >
        100%
      </SegmentedButton>
    </Segmented>
  </Block>

  <BlockTitle>Colors</BlockTitle>
  <Block strong insetMaterial outlineIos class="space-y-4">
    <Progressbar class="k-color-brand-red" progress={0.25} />
    <Progressbar class="k-color-brand-green" progress={0.5} />
    <Progressbar class="k-color-brand-yellow" progress={0.75} />
    <Progressbar class="k-color-brand-purple" progress={1} />
  </Block>
</Page>
