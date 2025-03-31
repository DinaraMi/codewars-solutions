export function flyBy(lamps: string, drone: string): string {
    const dronePosition: number = drone.indexOf("T");
    const count: number = Math.min(dronePosition + 1, lamps.length);
    return "o".repeat(count) + lamps.slice(count);
}