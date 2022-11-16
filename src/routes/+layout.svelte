<header>
	<img alt="" src="/images/octetlet-logo.svg" height={50} width={50} />
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
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
</style>
