<script lang="ts">
	import { SnackBar, snackbar, copyToClipboard, type SnackOpts } from '$lib';
	const snack: [string, SnackOpts] = ['snackbar text', { timeout: 3000, color: 'normal' }];
	const cb = { text: 'some text' };
</script>

<h1 style="text-align:center ;">DMT GUI KIT</h1>

<div style="display:flex;justify-content:center;flex-wrap:wrap;gap:8px;">
	<fieldset class="box">
		<legend>Snackbar</legend>

		<p>message: <input bind:value={snack[0]} type="text" /></p>
		<p>message: <input bind:value={snack[1].timeout} type="text" /></p>
		<p>
			message: <select name="color" bind:value={snack[1].color} id="">
				<option value="normal">normal</option>
				<option value="danger">danger</option>
			</select>
		</p>
		<button on:click={() => snackbar.show(...snack)}>open</button>
	</fieldset>

	<fieldset class="box">
		<legend>Copy to clipboard</legend>
		<p>Text: <input bind:value={cb.text} placeholder="text to copy" type="text" /></p>
		<button on:click={() => copyToClipboard(cb.text)}>copy</button>
	</fieldset>
</div>

<SnackBar />
