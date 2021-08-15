<script>
	import { fade } from 'svelte/transition'
	export let items
	export let search = ''
	let isFocused = false

	$: filteredSearch = items.filter((item) => {
		return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1
	})
</script>

<section>
	<div class="wrapper">
		<label>
			Search Names: <br />
			<input
				on:focus={() => (isFocused = true)}
				bind:value={search}
				placeholder="search"
				type="text"
			/>
		</label>

		{#if isFocused}
			<ul transition:fade={{ duration: 200 }}>
				{#each filteredSearch as item}
					<li
						on:click={() => {
							search = item
							isFocused = false
						}}
					>
						{item}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>

<style>
	.wrapper {
		display: inline-block;
		position: relative;
	}
	input {
		margin-top: 0.25rem;
	}
	ul {
		position: absolute;
		width: 100%;
		border: solid 1px black;
		border-radius: 0 0 0.25rem 0.25rem;
		list-style: none;
		padding: 0;
		margin: 0;
		box-shadow: 0 4px 8px rgb(0, 0, 0, 0.2);
	}
	li {
		background-color: #fff;
		text-transform: capitalize;
		padding: 10px;
		transition: 0.2s background ease-in-out;
	}
	li:hover {
		background: var(--listItemBg, #eee);
	}
</style>
