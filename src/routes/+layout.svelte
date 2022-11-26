<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import AuthContext from '$lib/contexts/AuthContext.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Header from '../lib/components/Header.svelte';

	let sidebarOpen = false;
</script>

<svelte:head><title>Octetlet</title></svelte:head>

<AuthContext>
	<SvelteToast />

	<Header bind:menuOpen={sidebarOpen} />
	<Sidebar bind:open={sidebarOpen} />

	<main>
		<slot />
	</main>

	<footer>Footer</footer>
</AuthContext>

<style>
	main {
		padding-inline: 1rem;
	}
</style>
