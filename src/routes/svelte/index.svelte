<script>
  let amount = 10
  let category = 9
  let difficulty = 'easy'
  const categories = [    
    {id: 9, category: 'General Knowledge'},
    {id: 10, category: 'Entertainment: Books'},
    {id: 32, category: 'Entertainment: Cartoon & Adventure'},
    {id: 29, category: 'Entertainment: Comics'},
    {id: 11, category: 'Entertainment: Film'},
    {id: 31, category: 'Entertainment: Japanese Anime & Manga'},
    {id: 12, category: 'Entertainment: Music'},
    {id: 13, category: 'Entertainment: Musicals & Theatres'},
    {id: 14, category: 'Entertainment: Television'},
    {id: 15, category: 'Entertainment: Video Games'},
    {id: 16, category: 'Entertainment: Board Games'},
    {id: 18, category: 'Science: Computers'},
    {id: 30, category: 'Science: Gadgets'},
    {id: 19, category: 'Science: Mathematics'},
    {id: 17, category: 'Science & Nature'},
    {id: 27, category: 'Animals'},
    {id: 25, category: 'Art'},
    {id: 26, category: 'Celebrities'},
    {id: 22, category: 'Geography'},
    {id: 23, category: 'History'},
    {id: 20, category: 'Mythology'},
    {id: 24, category: 'Politics'},
    {id: 21, category: 'Sports'},
    {id: 28, category: 'Vehicles'}
  ]
  const difficulties = [
    "easy", "medium", "hard"
  ]
	import AddNumbers from '@components/AddNumbers.svelte'
	import Quiz from '@components/Quiz.svelte'
	const title = 'Svelte for Beginners'

  async function getQuiz() {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
    const quiz = await res.json()
    if (res.ok) return quiz
    else console.error(`${quiz} ERROR: ${res.error}`)
  }
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<AddNumbers title="Svelte Quiz" />
<h2>Create a Quiz</h2>
<!-- <Quiz /> -->
<form>
<label for="amount">Number of Questions
<input id="amount" type="number" bind:value={amount} min="10" max="50"></label>
<label for="category">Category
<select id="category" bind:value={category} on:change="{() => category = ''}">
  {#each categories as aCategory}
    <option 
      on:click="{() => category = aCategory.id}" 
      value={aCategory.id}>
      {aCategory.category}
    </option>
  {/each}
</select></label>
<label for="difficulty">Difficulty
<select id="difficulty" bind:value={difficulty} on:change="{() => difficulty = ''}">
  {#each difficulties as aDifficulty}
    <option 
      on:click="{() => difficulty = aDifficulty}" 
      value={aDifficulty}>
      {aDifficulty}
    </option>
  {/each}
</select></label>
<button on:click={getQuiz}>Generate Quiz</button>
</form>
{#await getQuiz()}
<h3>loading quiz</h3>
{:then data}
<article>
  <h3>Quiz</h3>
  <ol>
    {#each data.results as data}
    {console.log(JSON.stringify(data))}
      <li>{@html JSON.stringify(data.question)}</li>
    {/each}
  </ol>
</article>
{/await}
<style>
form {
  display: grid;
  gap: 1rem;
  justify-items: flex-start;
}
form > * {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
ol {
  display: grid;
  gap: 1rem;
}
</style>