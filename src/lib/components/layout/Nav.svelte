<script>
	import { fly } from 'svelte/transition'
	import { page } from '$app/stores'
	export let isNavOpen
	export let windowWidth
</script>

<nav class="wrapper" transition:fly={{ y: -100 }}>
	{#if isNavOpen && windowWidth < 600}
		<button on:click={() => (isNavOpen = !isNavOpen)} aria-label="close navigation"> X </button>
	{/if}
	<a class:active={$page.path === '/'} href="/" on:click={() => (isNavOpen = !isNavOpen)}> Home </a>
	<a
		class:active={$page.path === '/components'}
		on:click={() => (isNavOpen = !isNavOpen)}
		href="/components"
	>
		Components
	</a>
	<a class:active={$page.path === '/quiz'} on:click={() => (isNavOpen = !isNavOpen)} href="/quiz">
		Quiz
	</a>
	<a
		class:active={$page.path === '/animations'}
		on:click={() => (isNavOpen = !isNavOpen)}
		href="/animations"
	>
		Animations
	</a>
</nav>

<style>
	button {
		position: absolute;
		inset: 1rem;
		height: 50px;
		width: 50px;
	}
	nav {
		z-index: 100;
		position: fixed;
		inset: 0;
		display: grid;
		justify-content: center;
		place-items: center;
		gap: 1rem;
		padding: 1rem;
		background: var(--textColor);
		font-size: var(--h5);
	}
	a {
		text-align: center;
		color: inherit;
	}
	.active {
		border-bottom: 4px solid var(--pink);
	}
	@media (min-width: 600px) {
		nav {
			position: unset;
			margin: 0 auto;
			max-width: 1080px;
			padding: 1rem 0;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
