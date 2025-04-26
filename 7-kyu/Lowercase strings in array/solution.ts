function arrayLowerCase(arr: []) {
    return arr.map(item => typeof item === 'string' ? item.toLowerCase() : item)
}