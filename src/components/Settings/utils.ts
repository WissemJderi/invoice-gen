export function formatPhoneNumber(phoneNumber: number | string): string {
  const phoneNumberAsString = String(phoneNumber);
  const first = phoneNumberAsString.slice(0, 2);
  const middle = phoneNumberAsString.slice(2, 5);
  const last = phoneNumberAsString.slice(5, 8);

  return `${first} ${middle} ${last}`;
}
