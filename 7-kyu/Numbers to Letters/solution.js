"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switcher = switcher;
function switcher(x) {
    return x.map((num) => {
        const n = parseInt(num);
        if (n >= 1 && n <= 26) {
            return String.fromCharCode(97 + (26 - n));
        }
        else if (n === 27) {
            return '!';
        }
        else if (n === 28) {
            return '?';
        }
        else if (n === 29) {
            return ' ';
        }
        else {
            return '';
        }
    }).join('');
}
