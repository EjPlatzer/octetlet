<script lang="ts" context="module">
	import { authKey } from '$lib/auth';
	import { Auth0Client, User, type PopupLoginOptions } from '@auth0/auth0-spa-js';
	import { onMount, setContext } from 'svelte';
	import { readable, writable, type Readable } from 'svelte/store';

	export interface AuthContext {
		login: (options?: PopupLoginOptions | undefined) => Promise<void>;
		logout: () => Promise<void>;
	}

	export const isAuthenticated = writable(false);
	export const user = writable<User | Record<string, never> | undefined>({});
	export const error = writable();
</script>

<script lang="ts">
	const client = new Auth0Client({
		domain: import.meta.env.VITE_AUTH0_DOMAIN,
		clientId: import.meta.env.VITE_AUTH0_CLIENT_ID
	});

	const onLogin = async () =>
		client.getUser().then((u) => {
			user.set(u);
			isAuthenticated.set(true);
		});

	const login = async (options?: PopupLoginOptions) => {
		try {
			await client.loginWithPopup(options);
			await onLogin();
		} catch (e) {
			console.error(e);
		}
	};

	const logout = async () => {
		await client.logout();

		user.set({});
		isAuthenticated.set(false);
	};

	const authContext = readable({
		login,
		logout
	});
	setContext<Readable<AuthContext>>(authKey, authContext);

	onMount(async () => {
		try {
			await client.getTokenSilently();
			await onLogin();
		} catch (error) {
			if ((error as { error: string }).error !== 'login_required') {
				throw error;
			}
		}
	});
</script>

<slot />
