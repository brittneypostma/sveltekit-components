<script>
	import { fade, blur, fly, slide, scale, draw } from 'svelte/transition'
	import Button from '@components/Button.svelte'
	import Circle from '@components/Circle.svelte'
	let isReady = false
	// Fade - opacity 0 to 1
	// Blur - opacity and blur
	// Fly - x and y along with opacity
	// Slide - height
	// Scale - start: scale, opacity
	// Draw - draw svg paths

	// params = delay, duration, easing: (t), css: (t, u), tick: (t, useDebugValue(value))
</script>

<Button bind:isReady type="Transitions" />
<h2 class:hidden={!isReady}>Transitions</h2>
<section>
	{#if isReady}
		<div transition:fade>
			<h3>Fade</h3>
			<Circle />
		</div>
		<div transition:blur={{ amount: 20 }}>
			<h3>Blur</h3>
			<Circle />
		</div>
		<div transition:fly={{ y: -100 }}>
			<h3>Fly</h3>
			<Circle />
		</div>
		<div transition:slide>
			<h3>Slide</h3>
			<Circle />
		</div>
		<div>
			<h3>Draw</h3>
			<svg height="100px" width="100px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124">
				<g>
					<path
						fill="transparent"
						transition:draw
						style="stroke:#ff3e00; stroke-width: 1.5"
						d="M45.41,108.86A21.81,21.81,0,0,1,22,100.18,20.2,20.2,0,0,1,18.53,84.9a19,19,0,0,1,.65-2.57l.52-1.58,1.41,1a35.32,35.32,0,0,0,10.75,5.37l1,.31-.1,1a6.2,6.2,0,0,0,1.11,4.08A6.57,6.57,0,0,0,41,95.19a6,6,0,0,0,1.68-.74L70.11,76.94a5.76,5.76,0,0,0,2.59-3.83,6.09,6.09,0,0,0-1-4.6,6.58,6.58,0,0,0-7.06-2.62,6.21,6.21,0,0,0-1.69.74L52.43,73.31a19.88,19.88,0,0,1-5.58,2.45,21.82,21.82,0,0,1-23.43-8.68A20.2,20.2,0,0,1,20,51.8a19,19,0,0,1,8.56-12.7L56,21.59a19.88,19.88,0,0,1,5.58-2.45A21.81,21.81,0,0,1,85,27.82,20.2,20.2,0,0,1,88.47,43.1a19,19,0,0,1-.65,2.57l-.52,1.58-1.41-1a35.32,35.32,0,0,0-10.75-5.37l-1-.31.1-1a6.2,6.2,0,0,0-1.11-4.08,6.57,6.57,0,0,0-7.06-2.62,6,6,0,0,0-1.68.74L36.89,51.06a5.71,5.71,0,0,0-2.58,3.83,6,6,0,0,0,1,4.6,6.58,6.58,0,0,0,7.06,2.62,6.21,6.21,0,0,0,1.69-.74l10.48-6.68a19.88,19.88,0,0,1,5.58-2.45,21.82,21.82,0,0,1,23.43,8.68A20.2,20.2,0,0,1,87,76.2a19,19,0,0,1-8.56,12.7L51,106.41a19.88,19.88,0,0,1-5.58,2.45"
					/>
				</g>
			</svg>
		</div>
	{/if}
</section>

<style>
	section {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
		text-align: center;
	}

	.hidden {
		opacity: 0;
		transition: 0.3s ease-in-out opacity;
	}
</style>
