export function areYouPlayingBanjo(name: string): string {
  if (!name.length) {
    return "does not play banjo";
  }

  return name[0].toLowerCase() === "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}
