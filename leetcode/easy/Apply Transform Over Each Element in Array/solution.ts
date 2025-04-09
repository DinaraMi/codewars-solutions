/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr: [], fn: Function) {
    const returnedArray = []
    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i))
    }
    return returnedArray
};

var map2 = function (arr: number[], fn: (value: number, index: number) => number): number[] {
    return arr.reduce<number[]>((acc, value, index) => {
        acc.push(fn(value, index));
        return acc;
    }, []);
};