/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr: [], n: number) {
    const result: any[] = [];
    function recursive(array: [], depth: number) {
        for (const item of array) {
            if (Array.isArray(item) && depth < n) {
                recursive(item, depth + 1)
            } else {
                result.push(item)
            }
        }
    }
    recursive(arr, 0)
    return result
};

var flat2 = function (arr: any[], n: number): any[] {
    const flatten = (input: any[], depth: number): any[] => {
        return input.reduce((acc, item) => {
            if (Array.isArray(item) && depth < n) {
                return acc.concat(flatten(item, depth + 1));
            }
            return acc.concat(item);
        }, []);
    };

    return flatten(arr, 0);
};