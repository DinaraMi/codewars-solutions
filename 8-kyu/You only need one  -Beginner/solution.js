"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = check;
exports.check2 = check2;
function check(a, x) {
    return a.includes(x);
}
function check2(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x)
            return true;
    }
    return false;
}
