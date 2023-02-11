/**
 * This is a utility that should be used sparsely and is
 * mainly used a fallback when TailwindCSS' `capitalize` util class
 * is not sufficient (as it capitalizes all first characters) in
 * multi-word string, not just the first.
 */
const capitaliseFirstChar = (input: string) =>
  input.charAt(0).toUpperCase() + input.slice(1);

export const useTextMutations = () => {
  return {
    capitaliseFirstChar,
  };
};
