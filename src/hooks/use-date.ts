const formatDate = (
  date: string,
  style: 'full' | 'long' | 'medium' | 'short'
) => {
  return new Intl.DateTimeFormat('nl-NL', {
    dateStyle: style,
  }).format(new Date(date));
};

export const useDate = () => {
  return {
    formatDate,
  };
};
