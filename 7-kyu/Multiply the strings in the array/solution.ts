function arrMultiply(arr:[]) {
    const multiply = (a: number, b: number) => a * b;

    const [a, b] = arr;

    return multiply(+a, +b).toString();
}

// DESCRIPTION:

// You received an array with two strings.
// Create a function that will return their product as a string.
//     E.g.

//     input: ['3', '5'] => output: '15'
// input: ['2', '-3'] => output: '-6'
// input: ['9', '0'] => output: '0'