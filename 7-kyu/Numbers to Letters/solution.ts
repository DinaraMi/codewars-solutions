export function switcher(x: string[]): string {
    return x.map((num: string): string => {
        const n = parseInt(num);
        if (n >= 1 && n <= 26) {
            return String.fromCharCode(97 + (26 - n));
        } else if (n === 27) {
            return '!';
        } else if (n === 28) {
            return '?';
        } else if (n === 29) {
            return ' ';
        } else {
            return '';
        }
    }).join('');
}