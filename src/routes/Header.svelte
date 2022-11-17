<script lang="ts">
	import Logo from '$lib/assets/Logo.svelte';
	import { page } from '$app/stores';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';

	const routes = [
		{ route: '/', name: 'Home' },
		{ route: '/about', name: 'About' }
	];
</script>

<header>
	<div class="header_links">
		<Logo />
		<nav>
			{#each routes as { route, name }}
				<a href={route} class={$page.route.id === route ? 'active' : ''}>{name}</a>
			{/each}
		</nav>
	</div>
	<div class="header_actions">
		<button type="button" on:click={() => toast.push('Login is not yet implemented')}>Login</button>
		<button
			type="button"
			class="primary"
			on:click={() => toast.push('Sign Up is not yet implemented')}>Sign Up</button
		>
	</div>
</header>

<style>
	header {
		background-color: var(--theme-dark-shades);
		color: var(--theme-light-shades);
		padding: 1em;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0px 2px 2px #00000033;
	}

	.header_links {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.header_actions {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	nav {
		display: flex;
		gap: 1rem;
	}

	a {
		color: var(--theme-light-shades);
		text-decoration: none;
		font-size: 1.5rem;
		transition: all 200ms;
	}

	a:hover {
		text-decoration: underline;
		filter: brightness(85%);
	}

	a.active {
		filter: brightness(85%);
		text-decoration: underline;
		cursor: default;
	}

	button {
		background-color: var(--theme-dark-shades);
		color: var(--theme-light-shades);
	}

	.primary {
		background-color: var(--theme-brand);
		color: var(--theme-dark-shades);
	}

	button:hover {
		filter: brightness(85%);
	}
</style>
