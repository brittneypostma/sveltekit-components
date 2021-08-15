<script>
	import Quiz from '@components/Quiz.svelte'
	const title = 'Quiz'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<h1>{title}</h1>

<Quiz quizName="Svelte Quiz" title="Svelte Quiz" />
