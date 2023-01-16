<script>
    import {
      Page,
      Card,
      Link,
      Button,
      BlockTitle,
    } from 'konsta/svelte';
    let cards = [1, 2, 3]
  </script>
  
  <div style="{'margin-bottom:4rem'}">
    <BlockTitle withBlock={false}>Simple Cards</BlockTitle>
    <div class="lg:grid lg:grid-cols-2">
      {#each cards as card}
      <Card>
        <div
          slot="header"
          class="ios:-mx-4 ios:-mt-4 h-48 p-4 flex items-end text-white ios:font-bold bg-cover bg-center material:rounded-xl mb-4 material:text-[22px]"
          style="background-image: url(https://cdn.framework7.io/placeholder/people-1000x600-6.jpg)"
        >
          Lorem Ipsum
        </div>
        <div class="text-gray-500 mb-3">Posted on January 21, 2021</div>
        <p>
          Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
          efficitur vitae non felis. Phasellus quis nibh hendrerit...
        </p>
        <svelte:fragment slot="footer">
          <div class="flex justify-end material:hidden">
            <Link>정보 가져오기</Link>
          </div>
          <div class="flex justify-end ios:hidden space-x-2">
            <Button rounded inline outline>정보 가져오기</Button>
          </div>
        </svelte:fragment>
      </Card>
    {/each}
    </div>
  </div>
  