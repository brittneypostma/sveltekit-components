<script>
	import AddNumbers from '@components/AddNumbers.svelte'
	import Events from '@components/Events.svelte'
	const title = 'Svelte for Beginners'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<AddNumbers title="Svelte Quiz" />
<Events />
