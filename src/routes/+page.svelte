<script lang="ts">
	import { SnackBar, snackbar } from '$lib';
	import type { SnackOpts } from '$lib/store/snack';
	const snack: [string, SnackOpts] = ['snackbar text', { timeout: 3000, color: 'normal' }];
</script>

<h1>Welcome to your library project</h1>

<div style="flex flex-wrap gap-3">
	<fieldset class='box'>
		<legend>Snackbar</legend>

		<p>message: <input bind:value={snack[0]} type="text" /></p>
		<p>message: <input bind:value={snack[1].timeout} type="text" /></p>
		<p>
			message: <select name="color" bind:value={snack[1].color} id="">
				<option value="normal">normal</option>
				<option value="danger">danger</option>
			</select>
		</p>
		<button on:click={()=>snackbar.show(...snack)}>open</button>
	</fieldset>
</div>

<SnackBar />
