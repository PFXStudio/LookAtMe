<script>
  import { List, ListItem, Card, Link, BlockTitle, TabbarLink } from "konsta/svelte";
  import { EnvelopeFill, Calendar, CloudUploadFill } from "framework7-icons/svelte";
</script>

<div style={"margin-bottom:6rem"}>
  <BlockTitle withBlock={false}>매칭 된 룩커 목록이에요.</BlockTitle>
  <List strongIos outlineIos>
    <ListItem
      chevronMaterial={false}
      link
      title="Yellow Submarine"
      after="$15"
      subtitle="Beatles"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus."
    >
      <img
        class="ios:rounded-lg material:rounded-full ios:w-20 material:w-10"
        slot="media"
        src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
        width="80"
        alt="demo"
      />
    </ListItem>
  </List>
</div>
