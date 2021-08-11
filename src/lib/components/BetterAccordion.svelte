<script>
	import { slide } from '@actions/slide'
	export let buttonText = ''
	export let isOpen = true
</script>

<button on:click={() => (isOpen = !isOpen)}>
	<span class:isOpen>&#9654;</span>
	{buttonText}
</button>

<div
	class="accordion-content"
	use:slide={{ isOpen, duration: 200 }}
	on:animationEnd={() => console.log('ended')}
>
	<div class="wrapper">
		<slot />
	</div>
</div>

<style>
	button {
		display: block;
		width: 100%;
		text-align: left;
		margin: 0;
		border: 1px solid navy;
	}
	span {
		margin-right: 0.5rem;
		display: inline-block;
		transition: transform 0.2s ease-in-out;
	}

	span:not(.isOpen) {
		transform: rotate(0.25turn);
	}
	.accordion-content {
		border: 1px solid navy;
		border-top: 0;
	}
	.wrapper {
		padding: 1rem;
	}
</style>
