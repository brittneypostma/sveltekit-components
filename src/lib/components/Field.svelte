<script>
	export let label = ''
	export let value
	export let instructions
	export let placeholder
	export let type = 'text'

	function handleInput(e) {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value
	}
</script>

<label>
	{#if label}
		<span>{label}</span><br />
	{/if}
	{#if instructions}
		<span class="instructions">{instructions}</span><br />
	{/if}
	<input on:input={handleInput} {type} {value} {placeholder} />
</label>

<style>
	.instructions {
		opacity: 0.7;
		font-size: var(--instructionFontSize, 1rem);
	}
</style>
