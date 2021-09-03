<script>
	import { fade, scale, fly } from 'svelte/transition'
	import { bounceOut, quintOut, elasticOut } from 'svelte/easing'
	import { drag } from '@actions/drag'

	let isActive = false

	// transform: translate3d(${-100 - t * -100}px, 0, 0);

	function transition(node, params) {
		return {
			css: (t) => {
				return `
          transform: scale(${t})
        `
			},
			easing: bounceOut,
			duration: 3000
		}
	}
</script>

<button on:click={() => (isActive = !isActive)}
	>{#if isActive}Hide Box{:else}Show Box{/if}</button
>

{#if isActive}
	<div
		transition:transition
		use:drag={{ color: 'purple' }}
		on:dragstop={(event) => {
			// event.detail.node.style.backgroundColor = event.detail.color
			if (event.detail.x > 300) isActive = false
		}}
	/>
{/if}

<style>
	div {
		margin-top: 1rem;
		background: var(--accent);
		width: 100px;
		height: 100px;
	}
</style>
