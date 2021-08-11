<script>
	import BetterAccordion from '@components/BetterAccordion.svelte'
	import Field from '@components/Field.svelte'
	import SearchFilter from '@components/SearchFilter.svelte'
	import Markdown from '@components/Markdown.svelte'
	import Toggle from '@components/Toggle.svelte'
	let isToggled = false
	export let search = ''
	let items = ['Brittney', 'Joe', 'Annabelle', 'Alex', 'Amelia']
</script>

<h1>SvelteKit UI</h1>
<h2>
	Welcome
	{#if search !== ''}
		, {search}
	{/if}
</h2>

<article>
	<h3>Markdown Editor</h3>
	<Markdown />
</article>
<article>
	<h3>Accordion</h3>
	<section>
		<BetterAccordion isOpen={false} buttonText="Do I need a credit card??">
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste veritatis, distinctio
				cum sit nam velit ducimus sunt repellat eos quaerat culpa facilis exercitationem eum
				cupiditate totam autem iure quidem!
			</p>
		</BetterAccordion>
	</section>
</article>
<article>
	<h3>Toggles</h3>
	<Toggle bind:isToggled label="toggle" --buttonColor="gold" --toggleBgColor="navy" />
	<Toggle bind:isToggled label="User" --buttonColor="navy" --toggleBgColor="cyan" />
	{#if isToggled}
		<h4>Toggled</h4>
	{/if}
</article>

<article>
	<h3>Name Inputs</h3>
	<Field bind:value={search} label="Name" instructions="Type your name" placeholder="name" />
	<SearchFilter {items} bind:search />
</article>

<style>
	article,
	article > * + * {
		margin-bottom: 1rem;
	}
</style>
