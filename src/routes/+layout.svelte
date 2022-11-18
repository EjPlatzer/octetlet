<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Header from '../lib/components/Header.svelte';

	let sidebarOpen = false;
</script>

<SvelteToast />

<svelte:head><title>Octetlet</title></svelte:head>

<Header bind:menuOpen={sidebarOpen} />
<Sidebar bind:open={sidebarOpen} />

<main>
	<slot />
</main>

<footer>Footer</footer>

<style>
	main {
		padding-inline: 1rem;
	}
</style>
