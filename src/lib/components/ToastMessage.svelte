<script>
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { toast } from '../stores/toast'
	export let message = ''
	export let duration = 1000

	let progress = tweened(100, { duration })
	async function updateProgress() {
		const newProgress = Math.random() * 100
		await progress.set(newProgress)
		toast.remove()
	}

	onMount(async () => {
		await progress.set(0)
		toast.remove()
	})
</script>

<div style={`width: ${$progress}%; height: 10px; background: green`} />
<p>{message}</p>

<style>
	p {
		margin: 0;
	}
</style>
