"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test5 = exports.test4 = exports.test3 = exports.test2 = void 0;
exports.test = test;
function test(number) {
    return number % 2 === 0;
}
const test2 = (arr) => arr.map(i => (i % 2 === 0 ? "even" : "odd"));
exports.test2 = test2;
const test3 = (arr) => {
    const result = [];
    arr.forEach(i => {
        result.push({
            key: i,
            value: i % 2 === 0 ? "even" : "odd"
        });
    });
    return result;
};
exports.test3 = test3;
const test4 = (arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push({
            key: arr[i].toString(),
            value: arr[i] % 2 === 0 ? "even" : "odd"
        });
    }
    return result;
};
exports.test4 = test4;
const test5 = (arr) => {
    return arr.reduce((acc, num) => {
        if (num % 2 === 0) {
            acc.even.push(num);
        }
        else {
            acc.odd.push(num);
        }
        return acc;
    }, { even: [], odd: [] });
};
exports.test5 = test5;
