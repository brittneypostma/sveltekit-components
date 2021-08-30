<script>
	import marked from 'marked'
	let text = ''
	let markdownText = text
	$: {
		markdownText = marked(text)
	}
</script>

<section class="wrapper">
	<label>
		Markdown Editor
		<textarea bind:value={text} />
	</label>
	<section class="article-wrapper">
		<h5>Markdown Display</h5>
		<div class="article">
			<article>{@html markdownText}</article>
		</div>
	</section>
</section>

<style>
	.wrapper {
		display: flex;
		gap: 1rem;
		height: 100%;
	}
	label {
    line-height: 1.15;
		height: 100%;
		font-size: 1rem;
	}
	textarea {
    margin-top: 0.5rem;
		width: 100%;
		height: 100%;
		min-height: 250px;
	}
	.article-wrapper {
		flex: 1 0 auto;
		height: 100%;
	}
	.article {
		border: 1px solid black;
		height: 100%;
		min-height: 250px;
	}
	h5 {
		margin: 0;
		font-weight: 400;
		font-size: 1rem;
		margin-bottom: 0.5rem;
    font-family: var(--bodyFont);
	}
</style>
