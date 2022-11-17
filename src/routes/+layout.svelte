<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Header from '../lib/components/Header.svelte';
</script>

<SvelteToast />

<svelte:head><title>Octetlet</title></svelte:head>

<Header />

<main>
	<slot />
</main>

<footer>Footer</footer>

<style>
	main {
		padding-inline: 1rem;
	}
</style>
