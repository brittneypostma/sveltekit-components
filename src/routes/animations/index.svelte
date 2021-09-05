<script>
	let title = `Animations`
	import Box from '@components/animations/Box.svelte'
	import Transition from '@components/animations/Transition.svelte'
	import Custom from '@components/animations/Custom.svelte'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<section>
	<h2>Custom Box</h2>
	<Box />
	<h2>Transitions</h2>
	<Transition />
	<h2>Custom Circle</h2>
	<Custom />
</section>

<style>
	section {
		display: grid;
		gap: 1rem;
		justify-items: flex-start;
	}
</style>
