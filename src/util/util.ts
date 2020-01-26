// export function getIdfromUrl(url :string) :number {
//   return Number(url.charAt(url.length-2));
// }

// Example:
// "https://swapi.co/api/species/5/"
export function getIdfromUrl(url :string) :number {
  return Number(url.split('/', 6).pop());
}