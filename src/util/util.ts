// Example Url:
// "https://swapi.dev/api/species/5/"
export function getIdfromUrl(url :string) :number {
  return Number(url.split('/', 6).pop());
}