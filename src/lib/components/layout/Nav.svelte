<script>
	import { page } from '$app/stores'
</script>
<nav class="wrapper">
	<a class:active={$page.path === '/'} href="/">Home</a>
	<a class:active={$page.path === '/components'} href="/components">Components</a>
	<a class:active={$page.path === '/quiz'} href="/quiz">Quiz</a>
	<a class:active={$page.path === '/animations'} href="/animations">Animations</a>
</nav>

<style>
	nav {
		display: grid;
    justify-content: center;
    justify-items: center;
		gap: 1rem;
    margin: 0 auto;
    max-width: 1080px;
		padding: 1rem;
	}
	a {
    text-align: center;
    color: inherit;
	}
	.active {
		border-bottom: 4px solid var(--pink);
	}
  @media (min-width: 600px) {
    nav {
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
    }

  }
</style>