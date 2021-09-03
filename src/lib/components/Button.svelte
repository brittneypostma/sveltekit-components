<script>
	export let isReady = false
	export let type
</script>

<button on:click={() => (isReady = !isReady)}>
	{#if isReady}Hide {type}{:else}Show {type}{/if}
</button>
