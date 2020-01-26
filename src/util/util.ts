// Example Url:
// "https://swapi.co/api/species/5/"
export function getIdfromUrl(url :string) :number {
  return Number(url.split('/', 6).pop());
}