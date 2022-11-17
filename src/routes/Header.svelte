<script lang="ts">
	import { page } from '$app/stores';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';

	const routes = [
		{ route: '/', name: 'Home' },
		{ route: '/about', name: 'About' }
	];
</script>

<header>
	<div class="header_links">
		<img alt="" src="/images/octetlet-logo.svg" height={50} width={50} />
		<nav>
			{#each routes as { route, name }}
				<a href={route} class={$page.route.id === route ? 'active' : ''}>{name}</a>
			{/each}
		</nav>
	</div>
	<div class="header_actions">
		<button
			type="button"
			class="primary"
			on:click={() => toast.push('Login is not yet implemented')}>Login</button
		>
		<button
			type="button"
			class="secondary"
			on:click={() => toast.push('Sign Up is not yet implemented')}>Sign Up</button
		>
	</div>
</header>

<style>
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
		color: var(--theme-text);
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
		appearance: none;
		/* border: 1px solid var(--theme-background); */
		border: none;
		border-radius: 6px;
		/* box-shadow: rgb(27 31 35 / 10%) 0 1px 0; */
		box-sizing: border-box;
		cursor: pointer;
		display: inline-block;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		user-select: none;
		touch-action: manipulation;
	}

	.primary {
		background-color: var(--theme-primary);
		color: var(--theme-text);
	}

	.secondary {
		background-color: var(--theme-secondary);
		color: var(--theme-background);
	}

	button:hover {
		filter: brightness(85%);
	}
</style>
