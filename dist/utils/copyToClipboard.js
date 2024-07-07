import { snackbar } from '../store/snack.js';
/**
 *
 * @param text Text to copy.
 * @param successMessage message to be displayed on snackbar, when it is successful. Defaults to "Text copied to clipboard."
 * @returns `true` if copy is successful else `false`.
 *
 */
export const copyToClipboard = async (text, successMessage) => {
    const message = successMessage || 'Text copied to clipboard.';
    const textToCopy = text;
    if (!textToCopy) {
        snackbar.show('Nothing to copy.', { color: 'danger', timeout: 1500 });
        return false;
    }
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(textToCopy);
            snackbar.show(message, { timeout: 3000 });
            return true;
        }
        catch (_error) {
            // let's try the fallback below
            console.warn(_error, 'Clipboard API not available. Falling back to execCommand');
        }
    }
    // fallback
    try {
        const input = document.createElement('textarea');
        input.innerHTML = textToCopy;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        snackbar.show(message, { timeout: 3000 });
        return true;
    }
    catch (_error) {
        // fallback failed
        console.error(_error, 'Could not copy to clipboard.');
        snackbar.show('Could not copy to clipboard.', { color: 'danger', timeout: 1500 });
        return false;
    }
};
