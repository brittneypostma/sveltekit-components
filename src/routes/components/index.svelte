<script>
	import BetterAccordion from '@components/BetterAccordion.svelte'
	import Field from '@components/Field.svelte'
	import SearchFilter from '@components/SearchFilter.svelte'
	import Markdown from '@components/Markdown.svelte'
	import Modal from '@components/Modal.svelte'
	import Toast from '@components/Toast.svelte'
	import Toggle from '@components/Toggle.svelte'

	import { toast } from '@stores/toast'

	export let search = ''

  let title = `SvelteKit UI`

	let isToggled = false
	let isModalOpen = false
	let navOpen = false

	let items = ['Brittney', 'Joe', 'Annabelle', 'Alex', 'Amelia']

	function toggleNav() {
		navOpen = !navOpen
	}

	function toggleModal() {
		modalOpen = !modalOpen
	}
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<h2>
	Welcome{#if search !== ''}
		, {search}
	{/if}
</h2>

<article>
	<h3>Name Inputs</h3>
	<Field bind:value={search} label="Name" instructions="Type your name" placeholder="name" />
	<SearchFilter {items} bind:search />
</article>
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
<article class="toggles">
	<h3>Toggles</h3>
	<Toggle bind:isToggled label="toggle" --buttonColor="var(--accent)" --toggleBgColor="var(--navy)" />
	<Toggle bind:isToggled label="User" --buttonColor="var(--navy)" --toggleBgColor="var(--accent)" />
	{#if isToggled}
		<h4>Toggled</h4>
	{/if}
</article>
<article>
	<button on:click={() => toast.send('New message!' + Math.random())}> New Toast </button>
	<Toast duration={3000} />
	<button on:click={() => (isModalOpen = true)}>Open Modal</button>
	<Modal bind:isModalOpen>
		<Field value={0} label="Number" type="number" placeholder="1" />
		<Field label="Name" type="text" placeholder="Brittney" value="" instructions="" />
	</Modal>
</article>

<style>
	article,
	article > * + * {
		margin-bottom: 1rem;
	}
	.toggles {
		display: grid;
		gap: 1rem;
	}
</style>
