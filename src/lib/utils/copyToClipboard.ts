import { snackbar } from '$lib/store/snack';

/**
 *
 * @param text Text to copy.
 * @param successMessage message to be displayed on snackbar, when it is successful. Defaults to "Text copied to clipboard."
 * @returns `true` if copy is successful else `false`.
 *
 */
export const copyToClipboard = async (
  text: string,
  successMessage?: string
) => {
  const message = successMessage || 'Text copied to clipboard.';
  let textToCopy = text;

  if (!textToCopy) {
    snackbar.show('Nothing to copy.', { color: 'danger', timeout: 1500 });
    return false;
  }

  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(textToCopy);
      snackbar.show(message);
      return true;
    } catch (error) {
      // let's try the fallback below
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
    snackbar.show(message);
    return true;
  } catch (error) {
    snackbar.show('Could not copy to clipboard.', { color: 'danger', timeout: 1500 });
    return false;
  }
};
