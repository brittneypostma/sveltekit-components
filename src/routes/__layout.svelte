<script>
	import '@styles/reset.css'
	import '@styles/app.css'
  import Nav from '@components/layout/Nav.svelte'
</script>

<header>
  <Nav />
</header>
<main class="wrapper">
	<slot />
</main>

<style>
	main {
		padding: 0 1rem 1rem;
		height: 100%;
	}

  @media (min-width: 600px) {
    main {
      padding: 0 0 1rem;
    }
  }
</style>
