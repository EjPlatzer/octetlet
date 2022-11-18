<script lang="ts">
	import Logo from '../assets/Logo.svelte';
	import { page } from '$app/stores';
	import { toast } from '@zerodevx/svelte-toast';
	import { useMediaQuery } from '../stores/useMediaQuery';
	import MobileMenuLogo from '../assets/MobileMenuLogo.svelte';

	const routes = [
		{ route: '/demo', name: 'Demo' },
		{ route: '/about', name: 'About' }
	];

	const isLargeScreen = useMediaQuery('(min-width: 650px)');
</script>

<header>
	<div class="header_links">
		{#if $isLargeScreen}
			<a href="/" class="logo">
			<Logo />
			</a>
			<nav>
				{#each routes as { route, name }}
					<a href={route} class={$page.route.id === route ? 'active' : ''}>{name}</a>
				{/each}
			</nav>
		{:else}
			<MobileMenuLogo />
		{/if}
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

	.logo {
		color: var(--theme-brand);
		font-size: 2rem;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 3px;
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