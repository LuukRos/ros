export const isExternalUrl = (url: string) => {
  if (typeof window === 'undefined' || url.indexOf('/') === 0) return false;

  return new URL(url).origin !== window.location.origin;
};
