import { writable } from 'svelte/store';

function createSnackStore() {
	const { subscribe, update, set } = writable<{
		message: string;
		color: 'success' | 'danger';
	} | null>(null);

	return {
		subscribe,
		show: (
			value: string,
			{ color = 'success', timeout = 8000 } = {} as { color: 'success' | 'danger'; timeout: number }
		) =>
			// color : "success"|'danger'
			update(() => {
				setTimeout(() => set(null), timeout);
				return { message: value, color };
			}),
		close: () => set(null)
	};
}
export const snackbar = createSnackStore();
