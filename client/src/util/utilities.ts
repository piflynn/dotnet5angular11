export function lowercaseFirstLetter(str: string) {
  return `${str.substring(0, 1).toLowerCase()}${str.substring(1)}`;
}
