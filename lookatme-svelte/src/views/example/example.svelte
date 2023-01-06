<script>
	import Bottom from './bottom.svelte'
	let value = "Hi Svelte!!"
	let active = false
	let list = [
		{
			id: 0,
			content: "0000",
			done: false
		},
		{
			id: 1,
			content: "1111",
			done: false
		},
		{
			id: 2,
			content: "2222",
			done: true
		},
	]
	
	let count = 0
	function handleClick() {
		count += 1
	}
	
</script>

<p>
	{ value }
</p>

<input type="checkbox" bind:checked = { active } /> { active }
<ul>
	{#each list as item}
	<li>
		<p>
			{item.content} - {item.done}
		</p>
	</li>
	{/each}
</ul>

<button on:click={handleClick}>
	클릭수 { count } {(count % 2) === 0 ? 'time' : 'times'}
</button>

<p class:view={!active}>
	active is {active}
</p>

<div class="penal">
	<h1>
		panal
		<Bottom />
	</h1>
</div>


<style>
	.view {
		display: none;
	}
	  .penal {
    padding: 20px;
    display:flex;
    flex-direction: column;
    justify-items: center;
    justify-content: space-around;
    align-items: center;
    height: 500px;
    width:400px;
    background: #e2e2e2;
    border: 1px solid #777777;
  }

</style>
