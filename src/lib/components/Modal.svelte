<script>
	import { fly, fade } from 'svelte/transition'
	import Portal from '@components/Portal.svelte'

	import { clickOutside } from '@actions/clickOutside'

	export let isModalOpen = false
	export let background = true

	function closeModal() {
		isModalOpen = false
	}
</script>

{#if isModalOpen}
	<Portal>
		<div
			use:clickOutside
			on:click-outside={closeModal}
			class="modal-wrapper"
			transition:fly={{ opacity: 0, y: 100 }}
		>
			<div class="slot-wrapper">
				<slot />
			</div>
		</div>
		<div class="bg" on:click={closeModal} transition:fade />
	</Portal>
{/if}

<style>
	.modal-wrapper {
		position: fixed;
		inset: 25vh 0 0;
		min-width: 320px;
		max-width: 530px;
		margin: 0 auto;
		max-height: 50vh;
		overflow: auto;
		width: 100%;
		z-index: 100;
		background: rgb(255, 255, 255);
		padding: 1rem;
	}

	.slot-wrapper {
		display: grid;
		gap: 1rem;
		place-items: center;
		place-content: center;
		height: 46vh;
	}

	.bg {
		position: absolute;
		background: rgb(0, 0, 0, 0.7);
		cursor: point;
		inset: 0;
		z-index: 99;
	}
</style>
