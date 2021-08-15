<script>
	export let quizName = 'Quiz Name'
	let a = 0
	let b = 0
</script>

<h2>{quizName}</h2>
<section>
	<label>
		Number 1
		<input bind:value={a} type="number" />
	</label>
	<p class="math">+</p>
	<label>
		Number 2
		<input bind:value={b} type="number" />
	</label>
	<p class="math">=</p>
	<p>{a + b}</p>
</section>

<style>
	section {
		display: flex;
	}
	.math {
		margin: 0 1rem;
	}
	label {
		display: grid;
		gap: 0.25rem;
		align-items: flex-start;
		justify-items: center;
	}
	p {
		margin: 0;
		align-self: flex-end;
	}
</style>
