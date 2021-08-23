<script>
	let result
	const correctAnswer = 'b'
	const answers = ['a', 'b', 'c', 'd']
	let answered
  let correct = false
	function pickAnswer(answer) {
		answered = answer
		if (answer === correctAnswer) {
      correct = true
			return (result = 'correct! Great Job!')
		}
    correct = false
		result = 'wrong. Try Again!'
		console.log(``)
	}
</script>

<section>
	<h2>Events</h2>
	{#if result}
		<h3 class="{correct ? 'correct' : 'wrong'}" for="btn">Answer {answered} is {result}</h3>
	{:else}
		<h3 for="btn">Please pick an answer</h3>
	{/if}
	<section class="btns">
		{#each answers as answer}
			<button id="btn" on:click={() => pickAnswer(answer)}>{answer.toUpperCase()}</button>
		{/each}
	</section>
</section>

<style>
  .correct {
    color: green;
  }
  .wrong {
    color: red;
  }
	.btns {
		display: flex;
		gap: 0.5rem;
	}
  h3 {
    font-size: 1.5rem;
    color: black;
  }
</style>
