import { browser } from '$app/environment';
import { readable } from 'svelte/store';

export const useMediaQuery = (mediaQuery: string) =>
	readable<boolean | null>(null, (set) => {
		if (browser) {
			const mediaQueryList = window.matchMedia(mediaQuery);

			set(mediaQueryList.matches);

			const changeListener = (e: MediaQueryListEvent) => set(e.matches);

			mediaQueryList.addEventListener('change', changeListener);

			return () => mediaQueryList.removeEventListener('change', changeListener);
		}
	});
