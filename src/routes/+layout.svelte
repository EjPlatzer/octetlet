<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Header from './Header.svelte';
</script>

<SvelteToast />

<svelte:head><title>Octetlet</title></svelte:head>

<Header />

<main>
	<slot />
</main>

<footer>Footer</footer>

<style>
	:global(body) {
		/* Theme colors */
		--theme-primary: #158e84;
		--theme-secondary: #9ccc66;
		--theme-error: #e44c65;
		--theme-background: #333333;
		--theme-text: #f6f7fc;

		/* Toast settings */
		--toastBackground: var(--theme-secondary);
		--toastBarHeight: 0;

		/* body styles */
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

	main {
		padding-inline: 1rem;
	}
</style>
