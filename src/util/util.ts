export function getIdfromUrl(url :string) :number {
  return Number(url.charAt(url.length-2));
}
