const greetings: string[] = [
  "Good Morning",
  "Good Afternoon",
  "Good Evening",
  "Good Night",
];

export function greeting(currentHour: number): string {
  if (currentHour >= 5 && currentHour < 12) {
    return greetings[0];
  } else if (currentHour >= 12 && currentHour < 17) {
    return greetings[1];
  } else if (currentHour >= 17 && currentHour < 21) {
    return greetings[2];
  } else {
    return greetings[3];
  }
}
