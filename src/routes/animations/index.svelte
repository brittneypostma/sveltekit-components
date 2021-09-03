<script>
	let title = `Animations`
	import Box from '@components/animations/Box.svelte'
	import Transition from '@components/animations/Transition.svelte'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<section>
	<Box />
	<Transition />
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
		justify-items: flex-start;
	}
</style>
