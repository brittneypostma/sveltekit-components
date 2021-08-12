<script>
	import { fly, fade } from 'svelte/transition'
	import { flip } from 'svelte/animate'
	import Portal from '@components/Portal.svelte'
	import { toast } from '@stores/toast'
	import ToastMessage from '@components/ToastMessage.svelte'
	export let duration
</script>

<!-- 
<h1>{$progress}</h1>
<div style={`width: ${$progress}%; height: 10px; background: green`} />
<button on:click={updateProgress}>GO</button> -->
<Portal>
	<div on:click={toast.remove} class="toast-wrapper">
		{#each $toast as message, index (message)}
			<section animate:flip in:fly={{ opacity: 0, x: 100 }} out:fade class="toast">
				<ToastMessage {message} {duration} />
			</section>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}

	.toast {
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgb(0, 0, 0, 0.2);
		background: rgb(250, 250, 250);
	}
</style>
