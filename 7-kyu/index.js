function flyBy(lamps, drone) {
    const dronePosition = drone.indexOf("T")
    const count = Math.min(dronePosition + 1, lamps.length)
    return "o".repeat(count) + lamps.slice(count)
}

function switcher(x) {
    return x.map(num => {
        const n = parseInt(num);
        if (n >= 1 && n <= 26) {
            return String.fromCharCode(97 + (26 - n));
        } else if (n === 27) {
            return '!';
        } else if (n === 28) {
            return '?';
        } else if (n === 29) {
            return ' ';
        }
    }).join('');
}