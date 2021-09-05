<script>
	import { customAnimation } from '@utils/customAnimation'
	import Button from '@components/Button.svelte'

	let isReady = false
</script>

<Button bind:isReady type="Circle" />
{#if isReady}
	<div transition:customAnimation={{ duration: 1000 }} />
{/if}

<style>
	div {
		width: 100px;
		height: 100px;
		border-radius: 100%;
		background-color: var(--accent);
	}
</style>
