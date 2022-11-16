<script lang="ts">
	import { page } from '$app/stores';

	const routes = [
		{ route: '/', name: 'Home' },
		{ route: '/about', name: 'About' }
	];

	console.log($page);
</script>

<svelte:head><title>Octetlet</title></svelte:head>

<header>
	<img alt="" src="/images/octetlet-logo.svg" height={50} width={50} />
	<nav>
		{#each routes as { route, name }}
			<a href={route} class={$page.route.id === route ? 'active' : ''}>{name}</a>
		{/each}
	</nav>
</header>

<main>
	<slot />
</main>

<footer>Footer</footer>

<style>
	:global(body) {
		--theme-primary: #158e84;
		--theme-secondary: #9ccc66;
		--theme-error: #e44c65;
		--theme-background: #333333;
		--theme-text: #f6f7fc;
		background-color: var(--theme-background);
		font-family: sans-serif;
		color: var(--theme-text);
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(#root) {
		height: 100vh;
		display: grid;
		grid-template-rows: auto 1fr auto;
	}

	header {
		background-color: var(--theme-primary);
		color: var(--theme-text);
		padding: 1em;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0px 2px 2px #00000033;
	}

	main {
		padding-inline: 1rem;
	}

	nav {
		display: flex;
		gap: 1rem;
	}

	a {
		color: var(--theme-text);
		text-decoration: none;
		font-size: 1.5rem;
		transition: all 200ms;
	}

	a:hover {
		text-decoration: underline;
		color: rgb(200, 200, 200);
	}

	a.active {
		text-decoration: underline;
	}
</style>
