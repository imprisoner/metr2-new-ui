export const capitalizeFirstLetter = (str: string) => {
  return str.trim().charAt(0).toUpperCase() + str.slice(1);
};