const CAMP_PATH = "/practicums/startup-lab-camp";

export function safeCampReturnTo(value: unknown): string {
  if (typeof value !== "string" || !value.startsWith(`${CAMP_PATH}/`) || /[\\\r\n]/.test(value)) {
    return `${CAMP_PATH}/practicum/live-opportunities`;
  }
  const target = new URL(value, "https://camp.invalid");
  return target.origin === "https://camp.invalid" &&
    target.pathname.startsWith(`${CAMP_PATH}/`) &&
    target.pathname !== `${CAMP_PATH}/account`
    ? `${target.pathname}${target.search}${target.hash}`
    : `${CAMP_PATH}/practicum/live-opportunities`;
}
