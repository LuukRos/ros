/**
 * This is a utility that has been forked and altered from npm package `get-text-width`.
 */
export const useTextWidth = (text: string) => {
  let width = 0;
  if (typeof window === 'undefined' || !('document' in window) || !text)
    return width;

  const container = document.createElement('canvas');
  const context = container.getContext('2d');
  if (context) {
    context.font = window
      .getComputedStyle(document.body)
      .getPropertyValue('font');
    width = context.measureText(text).width;
  }

  return width;
};
