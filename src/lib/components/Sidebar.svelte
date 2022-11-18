<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	const routes = [
		{ route: '/', name: 'Home' },
		{ route: '/demo', name: 'Demo' },
		{ route: '/about', name: 'About' }
	];

	export let open = false;
</script>

{#if open}
	<aside transition:fly={{ x: -250, opacity: 1 }}>
		<nav>
			{#each routes as { route, name }}
				<a
					href={route}
					class={$page.route.id === route ? 'active' : ''}
					on:click={() => (open = false)}>{name}</a
				>
			{/each}
		</nav>
	</aside>
{/if}

<style>
	aside {
		position: fixed;
		top: 0;
		left: 0;
		width: 10rem;
		padding-top: 90px;
		height: 100%;
		background-color: var(--theme-dark-shades);
		color: var(--theme-light-shades);
		box-shadow: 2px 0px 2px #00000033;
	}

	nav {
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	a {
		display: block;
		color: var(--theme-light-shades);
	}
</style>
