<script>
	import { page } from '$app/stores'
	import '@styles/reset.css'
	import '@styles/app.css'
</script>

<nav>
	<a class:active={$page.path === '/'} href="/">Home</a>
	<a class:active={$page.path === '/svelte'} href="/svelte">Svelte</a>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		display: flex;
		gap: 0.5rem;
		padding: 1rem 1rem 0;
	}
	nav > a {
		text-decoration: none;
		padding-bottom: 0.25rem;
		border-bottom: 2px solid transparent;
		color: inherit;
	}
	.active {
		border-bottom: 2px solid black;
	}
	main {
		padding: 0 1rem 1rem;
		height: 100%;
	}
</style>
