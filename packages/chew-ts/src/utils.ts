export function getIndentation(level: number) {
  return new Array(Math.max(level, 0)).fill(' ').join(' ')
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
