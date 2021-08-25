<script>
  let amount = 10
  let category
  let difficulty
  let type
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
	import AddNumbers from '@components/AddNumbers.svelte'
	import Quiz from '@components/Quiz.svelte'
	const title = 'Svelte for Beginners'
  $: console.log(category)
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<AddNumbers title="Svelte Quiz" />
<h2>Quiz</h2>
<!-- <Quiz /> -->
<label for="amount">Number of Questions</label>
  <input id="amount" type="number" bind:value={amount} min="10" max="50">
  <label for="category">Category</label>
    <select id="category" bind:value={category} on:change="{() => category = ''}">
    {#each categories as aCategory}
      <option on:click="{() => category = aCategory.id}" value={aCategory.id}>{aCategory.category}</option>
    {/each}
    </select>
  <label for="difficulty">Difficulty</label>
    <input type="text">
    <label for="type">Type</label>
      <input type="text">
