function arrMultiply(arr:[]) {
    const char1 = arr[0]
    const char2 = arr[1]
    const num1 = +char1
    const num2 = +char2
    const result = num1 * num2;
    return result.toString()
}

// DESCRIPTION:

// You received an array with two strings.
// Create a function that will return their product as a string.
//     E.g.

//     input: ['3', '5'] => output: '15'
// input: ['2', '-3'] => output: '-6'
// input: ['9', '0'] => output: '0'