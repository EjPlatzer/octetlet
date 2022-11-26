<script lang="ts">
	import { getContext } from 'svelte';
	import Logo from './Logo.svelte';
	import { page } from '$app/stores';
	import { useMediaQuery } from '$lib/stores/useMediaQuery';
	import MobileMenuLogo from './MobileMenuLogo.svelte';
	import { authKey } from '$lib/auth';
	import { isAuthenticated, user, type AuthContext } from '$lib/contexts/AuthContext.svelte';
	import type { Readable } from 'svelte/store';

	const routes = [
		{ route: '/demo', name: 'Demo' },
		{ route: '/about', name: 'About' }
	];

	const auth = getContext<Readable<AuthContext>>(authKey);

	const isLargeScreen = useMediaQuery('(min-width: 650px)');

	export let menuOpen = false;

	const login = () =>
		$auth.login({
			authorizationParams: {
				redirect_uri: window.location.origin
			}
		});

	const logout = () => $auth.logout();
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
			<button aria-expanded="false" class="icon-button" on:click={() => (menuOpen = !menuOpen)}>
				<MobileMenuLogo />
			</button>
		{/if}
	</div>
	{#if $isAuthenticated}
		<img src={$user?.picture} alt={$user?.nickname} class="avatar" on:click={logout} />
	{:else}
		<div class="header_actions">
			<button type="button" on:click={login}>Login</button>
			<button type="button" class="primary">Sign Up</button>
		</div>
	{/if}
</header>

<style>
	header {
		position: sticky;
		z-index: 1;
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

	.avatar {
		height: 50px;
		width: 50px;
		border-radius: 100%;
	}
</style>
