import { writable } from 'svelte/store';

export type SnackOpts = { color: 'normal' | 'danger'; timeout: number }

function createSnackStore() {
	const { subscribe, update, set } = writable<{
		message: string;
		color: SnackOpts['color'];
	} | null>(null);

	let timeoutId: NodeJS.Timeout | undefined

	const close = () => {
		clearTimeout(timeoutId)
		set(null)
	}
	return {
		subscribe,
		show: (
			value: string,
			{ color = 'normal', timeout = 8000 } = {} as SnackOpts
		) =>
			update(() => {
				close()
				timeoutId = setTimeout(close, timeout);
				return { message: value, color };
			}),
		close
	};
}
export const snackbar = createSnackStore();
