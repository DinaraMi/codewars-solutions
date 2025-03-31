"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flyBy = flyBy;
function flyBy(lamps, drone) {
    const dronePosition = drone.indexOf("T");
    const count = Math.min(dronePosition + 1, lamps.length);
    return "o".repeat(count) + lamps.slice(count);
}
